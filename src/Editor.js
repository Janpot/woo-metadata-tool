import React from 'react';
import Textfield from 'react-mdl/lib/Textfield';

var EditorInput = props => {
  return (
    <div className="mdl-cell mdl-cell--12-col">
      <Textfield
        className="mdl-textfield--full-width"
        label={props.label}
        floatingLabel={true}
        {...props}
      />
    </div>
  );
}

var EditorUrlInput = props => {
  var urlPattern = /^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:/?#]+|\[[a-f\d:]+\])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i.source;
  return (
    <EditorInput error="This is not a valid url" pattern={urlPattern} {...props}/>
  );
}

var Editor = React.createClass({
  getInitialState: function() {
    return {
      name: this.props.name || 'ACME',
      url: this.props.url || 'http://www.acme.org',
      blog: '',
      facebook: '',
      googleplus: '',
      twitter: '',
      yelp: '',
      foursquare: ''
    };
  },
  onChange: function (event) {
    var property = event.target.name;
    var value = event.target.value;
    this.setState({ [property]: value }, function () {
      this.props.onChange(this.state)
    });
  },
  generateJsonld: function () {
    var result = [];
    if (this.state.blog) {
      result.push({
        "@context" : "http://schema.org",
        "@type" : "Blog",
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
        "@context" : "http://schema.org",
        "@type" : "Organization",
        name: this.state.name,
        url: this.state.url,
        sameAs: sameAs
      });
    }
    return result;
  },
  setProperty: function (name, value) {
    this.setState({ [name]: value }, function () {
      this.props.onChange(this.generateJsonld());
    });
  },
  render: function() {
    var bindProperty = property => ({
      value: this.state[property],
      onChange: e => this.setProperty(property, e.target.value)
    });

    return (
      <form className="mdl-grid">
        <EditorInput label="The name of your organization" {...bindProperty('name')}/>
        <EditorUrlInput label="The url of your website" {...bindProperty('url')}/>
        <EditorUrlInput label="The url of your blog" {...bindProperty('blog')}/>
        <EditorUrlInput label="The url of your Facebook page" {...bindProperty('facebook')}/>
        <EditorUrlInput label="The url of your Google+ page" {...bindProperty('googleplus')}/>
        <EditorUrlInput label="The url of your Twitter page" {...bindProperty('twitter')}/>
        <EditorUrlInput label="The url of your Yelp page" {...bindProperty('yelp')}/>
        <EditorUrlInput label="The url of your Foursquare page" {...bindProperty('foursquare')}/>
      </form>
    );
  }
});

export default Editor;
