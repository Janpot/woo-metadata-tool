import React, { useState, useEffect } from 'react';
import TextField, { TextFieldProps } from '@material-ui/core/TextField';
import { JsonLd } from './Viewer';

function EditorInput(props: TextFieldProps) {
  return <TextField label={props.label} fullWidth margin="normal" {...props} />;
}

function EditorUrlInput({ value, ...props }: TextFieldProps) {
  const urlPattern = /^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:/?#]+|\[[a-f\d:]+\])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i;
  const isValid =
    typeof value === 'string' && value ? urlPattern.test(value) : true;
  const helperText = isValid ? null : 'This is not a valid url';
  return (
    <EditorInput
      error={!isValid}
      helperText={helperText}
      value={value}
      {...props}
    />
  );
}

function useJsonldInput(initial: string) {
  const [value, setValue] = useState(initial);
  return {
    value,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
      setValue(e.target.value)
  };
}

function useJsonldEditor(jsonld: JsonLd, setJsonld: (jsonLd: JsonLd) => void) {
  const nameInput = useJsonldInput(jsonld.name);
  const urlInput = useJsonldInput(jsonld.url);
  const addressInput = useJsonldInput('');
  const facebookInput = useJsonldInput('');
  const googleplusInput = useJsonldInput('');
  const twitterInput = useJsonldInput('');
  const yelpInput = useJsonldInput('');
  const foursquareInput = useJsonldInput('');
  const linkedinInput = useJsonldInput('');

  useEffect(() => {
    setJsonld({
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
    });
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

interface EditorProps {
  className: string;
  value: JsonLd;
  onChange: (jsonLd: JsonLd) => void;
}

export default function Editor(props: EditorProps) {
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
  } = useJsonldEditor(props.value, props.onChange);

  return (
    <form className={props.className}>
      <EditorInput label="The name of your organization" {...nameInput} />
      <EditorUrlInput label="The url of your website" {...urlInput} />
      <EditorInput label="Your address" {...addressInput} />
      <EditorUrlInput
        label="The url of your Facebook page"
        {...facebookInput}
      />
      <EditorUrlInput
        label="The url of your Google+ page"
        {...googleplusInput}
      />
      <EditorUrlInput label="The url of your Twitter page" {...twitterInput} />
      <EditorUrlInput label="The url of your Yelp page" {...yelpInput} />
      <EditorUrlInput
        label="The url of your Foursquare page"
        {...foursquareInput}
      />
      <EditorUrlInput
        label="The url of your LinkedIn page"
        {...linkedinInput}
      />
    </form>
  );
}
