import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as FormValidator from '../component/common/formValidator';
import * as LoginController from '../controller/login';
import * as CommonActions from '../actions/common';
import Login from '../component/login';

export class LoginContainer extends Component {

  constructor(props) {
    super(props);
    this.state ={ formType: 'login', form: {} };
    this.submit = this.submit.bind(this);
    this.setFormType = this.setFormType.bind(this);
    this.setFormData = this.setFormData.bind(this);
    this.submit = this.submit.bind(this);
  }

  setFormType(formType){
    this.setState({ formType });
  }

  setFormData(key, value){
    let form = this.state.form;
    form[key] = value;
    this.setState({ form });  
  }
  
  submit(e) {
    if(!FormValidator.formValidation(this.state.formType, this.state.form)) {
      this.props.dispatch(CommonActions.setReduxState({
        modal : { open : true, message: 'All fields are mandatory', title: this.state.formType + ' failed', type: 'error' }
      }));
       e.preventDefault();
    } else if(this.state.formType === 'signup') {
        LoginController.createuser(this.state.form).then((res) => {
          this.props.dispatch(CommonActions.setReduxState(res));
        });
      } else {
        LoginController.getuser(this.state.form).then((res) => {
          if(res.userData) {
            this.props.dispatch(CommonActions.setReduxState(res));
          } else {
            this.props.dispatch(CommonActions.setReduxState({
              modal : { open : true, message: 'Invalid credentials', title: 'Authentication Failed', type: 'error' }
            }));
          }
        });
      }
    e.preventDefault();
  }

  render() {
      return(
        <Login
            form={this.state.form}
            formType={this.state.formType}
            setFormType={this.setFormType}
            setFormData={this.setFormData}
            submit={this.submit}
            userData={this.props.app.userData}
      />);
  }
}

function mapStateToProps(state) {
  return {
    app: state ? state : {}
  }
}

export default connect(mapStateToProps)(LoginContainer);
