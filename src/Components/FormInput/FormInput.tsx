import React from 'react';

import { FormInputContainer, FormInputLabel, Group } from './FormInput.styles';

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <Group>
      <FormInputContainer onChange={handleChange} {...otherProps} />
      {label ? (
        <FormInputLabel className={`${otherProps.value.length ? 'shrink' : ''}`}>
          {label}
        </FormInputLabel>
      ) : null}
    </Group>
  );
};

export default FormInput;
