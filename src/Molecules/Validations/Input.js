import React from 'react';
import { dripFormField } from 'react-drip-form';
import {GlamoInput as Input} from '../../Atoms/Input';

const DripInput = ({
  input,
  meta: { error, dirty, touched },
  ...props,
}) => (
  <div>
    <Input
      {...props}
      {...input}
    />
    {error && dirty && touched && <span style={{ color: 'red' }}>{error}</span>}
  </div>
);

export default dripFormField()(DripInput);
