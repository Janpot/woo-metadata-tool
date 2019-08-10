import React, { useState } from 'react';
import Viewer from './Viewer';
import Editor from './Editor';
import queryString from 'query-string';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/styles';

import { ReactComponent as GithubLogo } from './img/github-logo.svg';
import { ReactComponent as WoorankLogo } from './img/woorank-logo.svg';

function parseQuery () {
  var { url } = queryString.parse(window.location.search);
  if (url) {
    url = /https?:\/\//.test(url) ? url : `http://${url}`;
    var [ , name ] = /https?:\/\/(?:www\.)?([^.]+)/.exec(url) || [];
    return { name, url };
  }
  return null;
}

var initialValues = parseQuery();

const useStyles = makeStyles(theme => ({
  headerIcon: {
    fill: 'currentColor'
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%'
  },
  content: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'row'
  },
  editor: {
    flex: 1,
    overflow: 'auto',
    padding: theme.spacing(2)
  },
  viewer: {
    flex: 2,
    overflow: 'auto',
    padding: theme.spacing(2)
  }
}));

export default function App () {
  const [jsonld, setJsonld] = useState([]);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position='static' color='primary'>
        <Toolbar>
          <Typography variant='h6' color='inherit' style={{ flexGrow: 1 }}>
            WooRank Metadata Tool
          </Typography>
          <IconButton color='inherit' href='https://github.com/janpot/woo-metadata-tool'>
            <GithubLogo className={classes.headerIcon} />
          </IconButton>
          <IconButton color='inherit' href='https://www.woorank.com'>
            <WoorankLogo className={classes.headerIcon} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <div className={classes.content}>
        <Editor
          className={classes.editor}
          {...initialValues}
          onChange={setJsonld}
        />
        <Viewer
          className={classes.viewer}
          jsonld={jsonld}
        />
      </div>
    </div>
  );
}
