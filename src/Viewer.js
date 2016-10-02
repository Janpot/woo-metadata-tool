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
    return [
      '<script type="application/ld+json">',
      indent(JSON.stringify(this.props.jsonld, null, 2), 2),
      '</script>'
    ].join('\n');
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
    return (
      <div>
        <pre>
          <code ref="code" className="language-markup">{this.renderMarkup()}</code>
        </pre>
        <Button raised ripple onClick={this.copyToClipboard}>
          Copy to clipboard
        </Button>
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
