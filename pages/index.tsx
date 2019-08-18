import React, { useState } from 'react';
import Viewer, { JsonLd } from '../src/components/Viewer';
import Editor from '../src/components/Editor';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { NextPageContext } from 'next';

import GithubLogo from '../assets/github-logo.svg';
import WoorankLogo from '../assets/woorank-logo.svg';

const useStyles = makeStyles((theme: Theme) => ({
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

interface IndexProps {
  initialValues: Partial<JsonLd>;
}

export default function Index({ initialValues }: IndexProps) {
  const [jsonld, setJsonld] = useState({
    name: 'ACME',
    url: 'http://www.acme.org',
    address: '',
    sameAs: [],
    ...initialValues
  });

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" color="inherit" style={{ flexGrow: 1 }}>
            WooRank Metadata Tool
          </Typography>
          <IconButton
            color="inherit"
            href="https://github.com/janpot/woo-metadata-tool"
          >
            <GithubLogo className={classes.headerIcon} />
          </IconButton>
          <IconButton color="inherit" href="https://www.woorank.com">
            <WoorankLogo className={classes.headerIcon} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <div className={classes.content}>
        <Editor
          className={classes.editor}
          {...initialValues}
          value={jsonld}
          onChange={setJsonld}
        />
        <Viewer className={classes.viewer} jsonld={jsonld} />
      </div>
    </div>
  );
}

function parseQueryUrl(urlInput: string) {
  const url = /https?:\/\//.test(urlInput) ? urlInput : `https://${urlInput}`;
  var [, name = ''] = /https?:\/\/(?:www\.)?([^.]+)/.exec(url) || [];
  return { name, url };
}

function parseQuery(ctx: NextPageContext) {
  let { url } = ctx.query;
  if (typeof url === 'string') {
    return parseQueryUrl(url);
  } else if (Array.isArray(url)) {
    return parseQueryUrl(url[0]);
  } else {
    return {};
  }
}

Index.getInitialProps = (ctx: NextPageContext) => {
  return {
    initialValues: parseQuery(ctx)
  };
};
