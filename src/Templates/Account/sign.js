import React, { Component } from 'react';
import { connect } from "redux-zero/react";
import { Form, Button, Input, Label, Footer, FooterItem, Link } from '../../Molecules';
import { createSelector } from 'reselect'
import actions from '../../Store/action';

const mapToProps = (store) => (store);

export default connect(mapToProps, actions)(class Login extends Component {

  state = {
    firstname: "",
    password: "",
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

  onChangeName = () => {
    this.props.onChangeName(this.state);
  }

  createAccount = () => {


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
        <Label>LastName</Label>
        <Input islast type='password'
          name="password"
          placeholder='Nom'
          value={this.state.pasword}
          onChange={this.onChange} />
        <Button onClick={this.onChangeName}>Login</Button>
        <Button type="button" isLast onClick={this.createAccount}>Create a account</Button>
        <Footer>
          <FooterItem>
            <Link href="#">mot de passe oublié</Link>
          </FooterItem>
        </Footer>
      </Form>
    )
  }
});


