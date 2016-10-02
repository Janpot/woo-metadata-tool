import React from 'react';
import Viewer from './Viewer';
import Editor from './Editor';
import { Layout, Header, Content, Navigation } from 'react-mdl/lib/Layout';
import './App.css';
import queryString from 'query-string';

function parseQuery () {
  var { url } = queryString.parse(location.search);
  if (url) {
    url = /https?:\/\//.test(url) ? url : `http://${url}`;
    var [ ,name ] = /https?:\/\/(?:www\.)?([^\.]+)/.exec(url) || [];
    return { name, url };
  }
  return null;
}

var initialValues = parseQuery();

var App = React.createClass({
  getInitialState: function() {
    return {
      jsonld: []
    };
  },
  onChange: function (newValues) {
    this.setState({
      jsonld: newValues
    });
  },
  render: function() {
    return (
      <Layout fixedHeader>
        <Header title="WooRank Metadata Tool">
          <Navigation>
            <a href="https://github.com/janpot/woo-metadata-tool" title="GitHub">
              <span className="woo-icon woo-github"></span>
            </a>
            <a href="https://www.woorank.com" title="WooRank">
              <span className="woo-icon woo-woorank"></span>
            </a>
          </Navigation>
        </Header>
        <Content>
          <div className="mdl-grid">
            <div className="mdl-cell mdl-cell--6-col mdl-cell--12-col-tablet">
              <Editor {...initialValues} onChange={this.onChange}/>
            </div>
            <div className="mdl-cell mdl-cell--6-col mdl-cell--12-col-tablet">
              <Viewer className="mdl-cell mdl-cell--6-col" jsonld={this.state.jsonld}/>
            </div>
          </div>
        </Content>
      </Layout>
    );
  }
});

export default App;

