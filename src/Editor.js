import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';

function EditorInput (props) {
  return (
    <TextField
      label={props.label}
      fullWidth
      margin='normal'
      {...props}
    />
  );
}

function EditorUrlInput ({ value, ...props }) {
  const urlPattern = /^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:/?#]+|\[[a-f\d:]+\])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i;
  const isValid = value ? urlPattern.test(value) : true;
  const helperText = isValid ? null : 'This is not a valid url';
  return (
    <EditorInput
      error={!isValid}
      helperText={helperText}
      pattern={urlPattern} {...props}
    />
  );
}

function useMetadataInputs (initialValues, onChange) {
  const [state, setState] = useState(initialValues);

  function generateJsonld () {
    const result = [];
    if (state.blog) {
      result.push({
        '@context': 'http://schema.org',
        '@type': 'Blog',
        url: state.blog
      });
    }
    const sameAs = [
      state.facebook,
      state.googleplus,
      state.twitter,
      state.yelp,
      state.foursquare
    ].filter(x => x);
    if (sameAs.length > 0) {
      result.push({
        '@context': 'http://schema.org',
        '@type': 'Organization',
        name: state.name,
        url: state.url,
        sameAs: sameAs
      });
    }
    return result;
  }

  useEffect(() => {
    const jsonld = generateJsonld();
    onChange(jsonld);
  }, [ state ]);

  return Object.keys(initialValues).reduce((result, name) => {
    result[name] = {
      value: state[name],
      onChange: e => {
        setState({ ...state, [name]: e.target.value });
      }
    };
    return result;
  }, {});
}

export default function Editor (props) {
  const inputs = useMetadataInputs({
    name: props.name || 'ACME',
    url: props.url || 'http://www.acme.org',
    blog: '',
    facebook: '',
    googleplus: '',
    twitter: '',
    yelp: '',
    foursquare: ''
  }, props.onChange);

  return (
    <form className={props.className}>
      <EditorInput label='The name of your organization' {...inputs['name']} />
      <EditorUrlInput label='The url of your website' {...inputs['url']} />
      <EditorUrlInput label='The url of your blog' {...inputs['blog']} />
      <EditorUrlInput label='The url of your Facebook page' {...inputs['facebook']} />
      <EditorUrlInput label='The url of your Google+ page' {...inputs['googleplus']} />
      <EditorUrlInput label='The url of your Twitter page' {...inputs['twitter']} />
      <EditorUrlInput label='The url of your Yelp page' {...inputs['yelp']} />
      <EditorUrlInput label='The url of your Foursquare page' {...inputs['foursquare']} />
    </form>
  );
}
