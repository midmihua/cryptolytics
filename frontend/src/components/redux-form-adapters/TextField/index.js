import React from 'react';
import PropTypes from 'prop-types';

import { Input, Form, Label } from 'semantic-ui-react';


const TextField = props => {
  const {
    input,
    label,
    type,
    placeholder,
    disabled,
    meta: { touched, error },
  } = props;

  if (!('id' in input)) {
    input.id = `id_${input.name}`;
  }

  return (
    <Form.Field
      className="text-field__component"
      error={Boolean(touched && error)}
    >
      {label &&
        <label htmlFor={input.id}>{label}</label>
      }

      <Input
        {...input}
        disabled={disabled}
        type={type}
        placeholder={placeholder}
        labelPosition="right corner"
      />

      {touched && error &&
        <Label
          color={'red'}
          pointing
        >
          {error}
        </Label>
      }
    </Form.Field>
  );
};

TextField.propTypes = {
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  disabled: PropTypes.bool,
};

TextField.defaultProps = {
  label: null,
  placeholder: null,
  disabled: false,
};

export default TextField;
