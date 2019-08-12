import React, { useState, useEffect } from 'react';
import indent from 'indent';
import clipboard from 'clipboard-js';
import classnames from 'classnames';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import SyntaxHighlighter from 'react-syntax-highlighter';

export default function Viewer({ className, jsonld, async, ...props }) {
  const [showNotification, setShowNotification] = useState(false);
  const [minified, setMinified] = useState(false);
  const [markup, setMarkup] = useState(renderMarkup(jsonld));

  function renderMarkup(jsonld = [], minified = false) {
    if (jsonld.length > 0) {
      var joinChar = minified ? '' : '\n';
      var indentation = minified ? 0 : 2;
      return jsonld
        .map(object => {
          return [
            '<script type="application/ld+json">',
            indent(JSON.stringify(object, null, indentation), indentation),
            '</script>'
          ].join(joinChar);
        })
        .join(joinChar);
    } else {
      return '<!-- No input yet -->';
    }
  }

  useEffect(() => {
    const markup = renderMarkup(jsonld, minified);
    setMarkup(markup);
  }, [jsonld, minified]);

  async function copyToClipboard() {
    await clipboard.copy(markup);
    setShowNotification(true);
  }

  function closeNotification() {
    setShowNotification(false);
  }

  const clipboardEnabled = jsonld.length > 0;

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
      <SyntaxHighlighter language="markup">{markup}</SyntaxHighlighter>
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
