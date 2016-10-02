import React from 'react';
import { Textfield } from 'react-mdl';

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
  setProperty: function (name, value) {
    this.setState({ [name]: value }, function () {
      this.props.onChange({
        name: this.state.name,
        url: this.state.url,
        sameAs: [
          this.state.facebook,
          this.state.twitter,
          this.state.yelp,
          this.state.foursquare
        ].filter(x => x)
      })
    });
  },
  render: function() {
    var renderInput = (label, property) => {
      return (
        <div className="mdl-cell mdl-cell--12-col">
          <Textfield
            className="mdl-textfield--full-width"
            label={label}
            floatingLabel={true}
            value={this.state[property]}
            onChange={e => this.setProperty(property, e.target.value)}
          />
        </div>
      );
    }
    return (
      <form className="mdl-grid">
        {renderInput('The name of your organization', 'name')}
        {renderInput('The url of your website', 'url')}
        {renderInput('The url of your Facebook page', 'facebook')}
        {renderInput('The url of your Twitter page', 'twitter')}
        {renderInput('The url of your Yelp page', 'yelp')}
        {renderInput('The url of your Foursquare page', 'foursquare')}
      </form>
    );
  }
});

export default Editor;
