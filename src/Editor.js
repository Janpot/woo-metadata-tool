import React from 'react';
import { Textfield } from 'react-mdl';

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
  var urlPattern = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/.source;
  return (
    <EditorInput error="This is not a valid url" pattern={urlPattern} {...props}/>
  );
}

var Editor = React.createClass({
  getInitialState: function() {
    return {
      name: this.props.name,
      url: this.props.url,
      facebook: '',
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
    return {
      name: this.state.name,
      url: this.state.url,
      sameAs: [
        this.state.facebook,
        this.state.twitter,
        this.state.yelp,
        this.state.foursquare
      ].filter(x => x)
    };
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
        <EditorUrlInput label="The url of your Facebook page" {...bindProperty('facebook')}/>
        <EditorUrlInput label="The url of your Twitter page" {...bindProperty('twitter')}/>
        <EditorUrlInput label="The url of your Yelp page" {...bindProperty('yelp')}/>
        <EditorUrlInput label="The url of your Foursquare page" {...bindProperty('foursquare')}/>
      </form>
    );
  }
});

export default Editor;
