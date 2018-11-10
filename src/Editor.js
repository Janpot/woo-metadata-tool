import React from 'react';
import Textfield from 'react-mdl/lib/Textfield';

var EditorInput = props => {
  return (
    <div className='mdl-cell mdl-cell--12-col'>
      <Textfield
        className='mdl-textfield--full-width'
        label={props.label}
        floatingLabel
        {...props}
      />
    </div>
  );
};

var EditorUrlInput = props => {
  var urlPattern = /^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:/?#]+|\[[a-f\d:]+\])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i.source;
  return (
    <EditorInput error='This is not a valid url' pattern={urlPattern} {...props} />
  );
};

class Editor extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      name: this.props.name || 'ACME',
      url: this.props.url || 'http://www.acme.org',
      blog: '',
      facebook: '',
      googleplus: '',
      twitter: '',
      yelp: '',
      foursquare: ''
    };
    this.onChange = this.onChange.bind(this);
    this.bindProperty = this.bindProperty.bind(this);
  }

  onChange (event) {
    var property = event.target.name;
    var value = event.target.value;
    this.setState({ [property]: value }, () => {
      this.props.onChange(this.state);
    });
  }

  generateJsonld () {
    var result = [];
    if (this.state.blog) {
      result.push({
        '@context': 'http://schema.org',
        '@type': 'Blog',
        url: this.state.blog
      });
    }
    var sameAs = [
      this.state.facebook,
      this.state.googleplus,
      this.state.twitter,
      this.state.yelp,
      this.state.foursquare
    ].filter(x => x);
    if (sameAs.length > 0) {
      result.push({
        '@context': 'http://schema.org',
        '@type': 'Organization',
        name: this.state.name,
        url: this.state.url,
        sameAs: sameAs
      });
    }
    return result;
  }

  setProperty (name, value) {
    this.setState({ [name]: value }, () => {
      const jsonld = this.generateJsonld();
      this.props.onChange(jsonld);
    });
  }

  bindProperty (property) {
    return {
      value: this.state[property],
      onChange: e => this.setProperty(property, e.target.value)
    };
  }

  render () {
    return (
      <form className='mdl-grid'>
        <EditorInput label='The name of your organization' {...this.bindProperty('name')} />
        <EditorUrlInput label='The url of your website' {...this.bindProperty('url')} />
        <EditorUrlInput label='The url of your blog' {...this.bindProperty('blog')} />
        <EditorUrlInput label='The url of your Facebook page' {...this.bindProperty('facebook')} />
        <EditorUrlInput label='The url of your Google+ page' {...this.bindProperty('googleplus')} />
        <EditorUrlInput label='The url of your Twitter page' {...this.bindProperty('twitter')} />
        <EditorUrlInput label='The url of your Yelp page' {...this.bindProperty('yelp')} />
        <EditorUrlInput label='The url of your Foursquare page' {...this.bindProperty('foursquare')} />
      </form>
    );
  }
}

export default Editor;
