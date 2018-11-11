import React from 'react';
import Prism from 'prismjs';
import indent from 'indent';
import clipboard from 'clipboard-js';
import classnames from 'classnames';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

class Viewer extends React.Component {
  constructor (props) {
    super(props);
    this.codeRef = React.createRef();
    this.state = {
      showNotification: false,
      minified: false
    };
    this.copyToClipboard = this.copyToClipboard.bind(this);
    this.closeNotification = this.closeNotification.bind(this);
  }

  hightlight () {
    Prism.highlightElement(this.codeRef.current, this.props.async);
  }

  componentDidMount () {
    this.hightlight();
  }

  componentDidUpdate () {
    this.hightlight();
  }

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
  }

  copyToClipboard () {
    return clipboard.copy(this.renderMarkup())
      .then(() => {
        this.setState({ showNotification: true });
      });
  }

  closeNotification () {
    this.setState({ showNotification: false });
  }

  render () {
    var clipboardEnabled = this.props.jsonld.length > 0;
    const { className } = this.props;
    return (
      <div className={classnames(className)}>
        <Toolbar disableGutters>
          <div style={{ flexGrow: 1 }} />
          <FormControlLabel
            label='Minified'
            control={
              <Switch
                value={this.state.minified}
                onChange={e => this.setState({ minified: e.target.checked })}
              />
            }
          />
          <Button variant='outlined' onClick={this.copyToClipboard} disabled={!clipboardEnabled}>
            Copy to clipboard
          </Button>
        </Toolbar>
        <pre>
          <code ref={this.codeRef} className='language-markup'>{this.renderMarkup()}</code>
        </pre>
        <Snackbar
          action={
            <IconButton
              color='inherit'
              onClick={this.closeNotification}
            >
              <CloseIcon />
            </IconButton>
          }
          open={this.state.showNotification}
          autoHideDuration={3000}
          onClose={this.closeNotification}
          message='Your snippet has been copied to the clipboard.'
        />
      </div>
    );
  }
}

export default Viewer;
