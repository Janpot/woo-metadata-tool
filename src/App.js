import React, { useState } from 'react';
import Viewer from './Viewer';
import Editor from './Editor';
import queryString from 'query-string';
import CssBaseline from '@material-ui/core/CssBaseline';

import { MuiThemeProvider, createMuiTheme, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

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

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#607d8b'
    }
  },
  typography: {
    useNextVariants: true
  }
});

const styles = theme => ({
  headerIcon: {
    fill: 'currentColor'
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%'
  },
  header: {

  },
  content: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'row'
  },
  editor: {
    flex: 1,
    overflow: 'auto',
    padding: theme.spacing.unit * 2
  },
  viewer: {
    flex: 1,
    overflow: 'auto',
    padding: theme.spacing.unit * 2
  }
});

function App ({ classes }) {
  const [jsonld, setJsonld] = useState([]);

  function onChange (newValues) {
    setJsonld(newValues);
  }

  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />
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
            onChange={onChange}
          />
          <Viewer
            className={classes.viewer}
            jsonld={jsonld}
          />
        </div>
      </div>
    </MuiThemeProvider>
  );
}

export default withStyles(styles)(App);
