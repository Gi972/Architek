import React, { Component } from 'react';
import { connect } from "redux-zero/react";
import { createSelector } from 'reselect'

import { Form, Button, Input, Label } from '../../Molecules';
import actions from '../../Store/action';

const mapToProps = (store) => (store);

export default connect(mapToProps, actions)(class CreateAccount extends Component {

  state = {
    firstname: "",
    password: "",
    passwordbis: "",
    splitName: createSelector(state => state.firstname, item => item.split("").reverse())
  }


  onChange = (event) => {
    const name = event.currentTarget.name;
    const value = event.currentTarget.value;
    const newState = {};
    newState[name] = value
    this.setState(newState)
  }

  onSubmit() {

  }

  createLogin = () => {
    this.props.onChangeName(this.state);
  }

  render() {
    return (
      <Form>
        <h3>Formulaire</h3>
        <Label>FirstName</Label>
        <Input type='text'
          name="firstname"
          placeholder='Prenom'
          value={this.state.firstname}
          onChange={this.onChange} />
        <Label>Password</Label>
        <Input islast type='text'
          name="password"
          placeholder='password'
          value={this.state.lastname}
          onChange={this.onChange} />
        <Label>Confirmation Password</Label>
        <Input islast type='text'
          name="passwordbis"
          placeholder='Confirmation Password'
          value={this.state.lastname}
          onChange={this.onChange} />
        <Button type="button" isLast onClick={this.createLogin}>Create a account</Button>
      </Form>
    )
  }
});


