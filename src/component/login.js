import React, { Component } from 'react';
import { Redirect } from 'react-router';
import FieldGroup from './common/fieldGroup';
import * as FormValidator from './common/formValidator';
import { Row, Col, Nav, NavItem, FormGroup,FormControl, Radio, ControlLabel, Button } from 'react-bootstrap';

export class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const form = this.props.form ? this.props.form : {};
    if(this.props.userData){
      return <Redirect to="/home" push={true} />
    }
    return (
      <Row className="show-grid">
        <Col xs={0} md={3}></Col>
        <Col xs={12} md={6} className="body">
          <Nav bsStyle="tabs" activeKey={this.props.formType} justified onSelect={this.props.setFormType}>
            <NavItem eventKey="login"title="Login">
              Login
            </NavItem>
            <NavItem eventKey="signup" title="Sign-Up" id="signupnav">
              Sign-Up
            </NavItem>
          </Nav>
          <br />
        <form onSubmit={this.props.submit} className="form">
          <FieldGroup
            help="Minimun 8 Characters"
            id="username"
            type="text"
            label="Username"
            onChange={(e) => this.props.setFormData('username', e.target.value)}
            placeholder="Enter Username"
            validationState={FormValidator.username(form.username)}
          />
          <FieldGroup
            help="Minimun 8 Characters"
            id="password"
            label="Password"
            type="password"
            onChange={(e) => this.props.setFormData('password', e.target.value)}
            placeholder="*************"
            validationState={FormValidator.password(form.password)}
          />
          {
            this.props.formType === 'signup' ?
            <div>
              <FieldGroup
                id="emailComponet"
                type="email"
                label="Email address"
                onChange={(e) => this.props.setFormData('email', e.target.value)}
                placeholder="Enter email"
                validationState={FormValidator.email(form.email)}
              />
              <FieldGroup
                id="firstname"
                type="text"
                label="First Name"
                onChange={(e) => this.props.setFormData('firstname', e.target.value)}
                placeholder="Enter First Name"
                validationState={FormValidator.name(form.firstname)}
              />
              <FieldGroup
                id="lastname"
                type="text"
                label="Lat Name"
                onChange={(e) => this.props.setFormData('lastname', e.target.value)}
                placeholder="Enter Last Name"
                validationState={FormValidator.name(form.lastname)}
              />
              <FormGroup>
                <ControlLabel>Gender</ControlLabel><br />
                <Radio name="gender" inline onChange={(e) => this.props.setFormData('gender', e.target.value)} value="male">
                  Male
                </Radio>{' '}
                <Radio name="gender" inline onChange={(e) => this.props.setFormData('gender', e.target.value)} value="female">
                  Female
                </Radio>
              </FormGroup>
              <FormGroup controlId="country">
                <ControlLabel>Country</ControlLabel>
                <FormControl componentClass="select" placeholder="select" onChange={(e) => this.props.setFormData('country', e.target.value)}>
                  <option value="select">select</option>
                  <option value="India">India</option>
                </FormControl>
              </FormGroup>
            </div> : null
          }
          <Button bsStyle="primary" style={{ float: 'right' }} type="submit">Submit</Button>
          </form>
        </Col>
        <Col xs={0} md={3}></Col>
      </Row>
    );
  }
}

export default Login;
