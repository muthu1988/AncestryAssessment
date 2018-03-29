import React, { Component } from 'react';
import * as CommonAction from '../actions/common';
import * as HomeController from '../controller/home';
import { connect } from 'react-redux';
import Home from '../component/home';

export class HomeContainer extends Component {

  constructor(props) {
    super(props);
    this.state ={ };
    HomeController.getallusers().then((res) => {
      props.dispatch(CommonAction.setReduxState(res));
    });
  }

  render() {
    return <Home app={this.props.app} />
  }
}

function mapStateToProps(state) {
  return {
    app: state
  }
}

export default connect(mapStateToProps)(HomeContainer);
