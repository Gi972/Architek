import React from 'react';
import { dripForm } from 'react-drip-form';
import {Form} from '../../Atoms';

const DripFormulaire = (props) => {
  return (
    <Form>
      {props.children}
    </Form>
  )};

export default dripForm({
  validations: {
    email: {
      required: true,
      email: true,
    },
    password: {
      required: true,
    },
  },
})(DripFormulaire);


