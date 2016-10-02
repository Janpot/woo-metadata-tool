import React from 'react';
import Prism from 'prismjs';
import indent from 'indent';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css';
import { Button, Snackbar } from 'react-mdl';
import clipboard from 'clipboard-js';

var Viewer = React.createClass({
  getInitialState () {
    return {
      showNotification: false
    }
  },
  hightlight() {
    Prism.highlightElement(this.refs.code, this.props.async);
  },
  componentDidMount() {
    this.hightlight();
  },
  componentDidUpdate() {
    this.hightlight();
  },
  renderMarkup () {
    if (this.props.jsonld.length > 0) {
      return this.props.jsonld.map(object => {
        return [
          '<script type="application/ld+json">',
          indent(JSON.stringify(object, null, 2), 2),
          '</script>'
        ].join('\n');
      }).join('\n');
    } else {
      return '<!-- No input yet -->';
    }
  },
  copyToClipboard () {
    return clipboard.copy(this.renderMarkup())
      .then(() => {
        this.setState({ showNotification: true });
      });
  },
  closeNotification () {
    this.setState({ showNotification: false });
  },
  render: function() {
    var clipboardEnabled = this.props.jsonld.length > 0;
    return (
      <div>
        <Button raised ripple onClick={this.copyToClipboard} disabled={!clipboardEnabled}>
          Copy to clipboard
        </Button>
        <pre>
          <code ref="code" className="language-markup">{this.renderMarkup()}</code>
        </pre>
        <Snackbar
          action="Ok"
          onActionClick={this.closeNotification}
          active={this.state.showNotification}
          onTimeout={this.closeNotification}>
            Markup copied to clipboard.
        </Snackbar>
      </div>
    );
  }
});

export default Viewer;
