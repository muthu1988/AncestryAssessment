import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Row, Col, PageHeader, Glyphicon  } from 'react-bootstrap';
import * as CommonActions from '../actions/common';

class Header extends Component {

  constructor(props) {
    super(props);
    this.displayUserData = this.displayUserData.bind(this);
  }

  displayUserData(){
    const user = this.props.app.userData;
    this.props.dispatch(CommonActions.setReduxState({
      modal : { open : true, title: 'User Profile', type: 'info',
      message:
        <div style={{ columnCount: 2 }}>
          <div>First Name</div><b>{user.firstname}</b>
          <div>Last Name</div><b>{user.lastname}</b>
          <div>Email</div><b>{user.email}</b>
          <div>Username</div><b>{user.username}</b>
        </div>
     }
    }));
  }

  render() {
    return (
        <Row className="show-grid">
          <Col xs={12} md={12}>
          <PageHeader className="pageHeader">
              <a href="/">Ancestry</a>
              {
                this.props.app.userData ?
                <Glyphicon
                  glyph="user" aria-hidden="true"
                  bsSize="small" style={{ float: 'right' }}
                  onClick={this.displayUserData}></Glyphicon>
                : null
              }
            </PageHeader>
          </Col>
        </Row>
    );
  }
}

function mapStateToProps(state) {
  return {
    app: state
  }
}

export default connect(mapStateToProps)(Header);


