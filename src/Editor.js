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

function useJsonldInput (initial) {
  const [value, setValue] = useState(initial);
  return {
    value,
    onChange: e => setValue(e.target.value)
  };
}

function useJsonldEditor (onChange) {
  const nameInput = useJsonldInput('ACME');
  const urlInput = useJsonldInput('http://www.acme.org');
  const addressInput = useJsonldInput('');
  const facebookInput = useJsonldInput('');
  const googleplusInput = useJsonldInput('');
  const twitterInput = useJsonldInput('');
  const yelpInput = useJsonldInput('');
  const foursquareInput = useJsonldInput('');
  const linkedinInput = useJsonldInput('');

  useEffect(() => {
    onChange([
      {
        '@context': 'http://schema.org',
        '@type': 'Organization',
        name: nameInput.value,
        url: urlInput.value,
        address: addressInput.value,
        sameAs: [
          facebookInput.value,
          googleplusInput.value,
          twitterInput.value,
          yelpInput.value,
          foursquareInput.value,
          linkedinInput.value
        ].filter(Boolean)
      }
    ]);
  }, [
    nameInput.value,
    urlInput.value,
    addressInput.value,
    facebookInput.value,
    googleplusInput.value,
    twitterInput.value,
    yelpInput.value,
    foursquareInput.value,
    linkedinInput.value
  ]);

  return {
    nameInput,
    urlInput,
    addressInput,
    facebookInput,
    googleplusInput,
    twitterInput,
    yelpInput,
    foursquareInput,
    linkedinInput
  };
}

export default function Editor (props) {
  const {
    nameInput,
    urlInput,
    addressInput,
    facebookInput,
    googleplusInput,
    twitterInput,
    yelpInput,
    foursquareInput,
    linkedinInput
  } = useJsonldEditor(props.onChange);

  return (
    <form className={props.className}>
      <EditorInput label='The name of your organization' {...nameInput} />
      <EditorUrlInput label='The url of your website' {...urlInput} />
      <EditorInput label='Your address' {...addressInput} />
      <EditorUrlInput label='The url of your Facebook page' {...facebookInput} />
      <EditorUrlInput label='The url of your Google+ page' {...googleplusInput} />
      <EditorUrlInput label='The url of your Twitter page' {...twitterInput} />
      <EditorUrlInput label='The url of your Yelp page' {...yelpInput} />
      <EditorUrlInput label='The url of your Foursquare page' {...foursquareInput} />
      <EditorUrlInput label='The url of your LinkedIn page' {...linkedinInput} />
    </form>
  );
}
