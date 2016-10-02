import React from 'react';
import Prism from 'prismjs';
import indent from 'indent';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css';
import { Button, Checkbox, Snackbar } from 'react-mdl';
import clipboard from 'clipboard-js';

var Viewer = React.createClass({
  getInitialState () {
    return {
      showNotification: false,
      minified: false
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
      var joinChar = this.state.minified ? '' : '\n';
      var indentation = this.state.minified ? 0 : 2;
      return this.props.jsonld.map(object => {
        return [
          '<script type="application/ld+json">',
          indent(JSON.stringify(object, null, indentation), indentation),
          '</script>'
        ].join(joinChar);
      }).join(joinChar);
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
        <div className="mdl-layout__header-row">
          <div className="mdl-layout-spacer"></div>
          <div style={{ marginRight: '10px' }}>
            <Checkbox label="Minify" checked={this.state.minified} onChange={e => this.setState({ minified: e.target.checked })} />
          </div>
          <Button raised ripple onClick={this.copyToClipboard} disabled={!clipboardEnabled}>
            Copy to clipboard
          </Button>
        </div>
        <pre>
          <code ref="code" className="language-markup">{this.renderMarkup()}</code>
        </pre>
        <Snackbar
          action="Ok"
          onActionClick={this.closeNotification}
          active={this.state.showNotification}
          onTimeout={this.closeNotification}>
            Your snippet has been copied to the clipboard.
        </Snackbar>
      </div>
    );
  }
});

export default Viewer;
