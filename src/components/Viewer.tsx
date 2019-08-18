import React, { useState, useEffect } from 'react';
import clipboard from 'clipboard-js';
import classnames from 'classnames';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import * as analytics from '../analytics';

import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
// @ts-ignore
import markup from 'react-syntax-highlighter/dist/cjs/languages/prism/markup';
//@ts-ignore
import prism from 'react-syntax-highlighter/dist/cjs/styles/prism/prism';
// import markup from 'react-syntax-highlighter/languages/prism/markup'
// import prism from 'react-syntax-highlighter/dist/styles/prism/prism'
SyntaxHighlighter.registerLanguage('markup', markup);

// TODO: move out of this file
export interface JsonLd {
  name: string;
  url: string;
  address: string;
  sameAs: string[];
}

interface ViewerProps {
  className: string;
  jsonld: JsonLd;
}

function indent(inputStr: string, indentation: number) {
  return inputStr
    .split('\n')
    .map(str => ' '.repeat(indentation) + str)
    .join('\n');
}

export default function Viewer({ className, jsonld }: ViewerProps) {
  const [showNotification, setShowNotification] = useState(false);
  const [minified, setMinified] = useState(false);
  const [markup, setMarkup] = useState(renderMarkup(jsonld));

  function renderMarkup(jsonld: JsonLd, minified = false) {
    var joinChar = minified ? '' : '\n';
    var indentation = minified ? 0 : 2;
    return [
      '<script type="application/ld+json">',
      indent(
        JSON.stringify(
          {
            '@context': 'http://schema.org',
            '@type': 'Organization',
            ...jsonld
          },
          null,
          indentation
        ),
        indentation
      ),
      '</script>'
    ].join(joinChar);
  }

  useEffect(() => {
    const markup = renderMarkup(jsonld, minified);
    setMarkup(markup);
  }, [jsonld, minified]);

  async function copyToClipboard() {
    analytics.event('copy_to_clipboard');
    await clipboard.copy(markup);
    setShowNotification(true);
  }

  function closeNotification() {
    setShowNotification(false);
  }

  const clipboardEnabled = jsonld;

  return (
    <div className={classnames(className)}>
      <Toolbar disableGutters>
        <div style={{ flexGrow: 1 }} />
        <FormControlLabel
          label="Minified"
          control={
            <Switch
              value={minified}
              onChange={e => setMinified(e.target.checked)}
            />
          }
        />
        <Button
          variant="outlined"
          onClick={copyToClipboard}
          disabled={!clipboardEnabled}
        >
          Copy to clipboard
        </Button>
      </Toolbar>
      <SyntaxHighlighter language="markup" style={prism}>
        {markup}
      </SyntaxHighlighter>
      <Snackbar
        action={
          <IconButton color="inherit" onClick={closeNotification}>
            <CloseIcon />
          </IconButton>
        }
        open={showNotification}
        autoHideDuration={3000}
        onClose={closeNotification}
        message="Your snippet has been copied to the clipboard."
      />
    </div>
  );
}
