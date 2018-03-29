import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { Row, Col, Table, Well, Label } from 'react-bootstrap';

export class Home extends Component {

  render() {
    if(!this.props.app.userData){
      return <Redirect to="/" push={true} />
    }
    return (
      <Row className="show-grid">
      <Col xs={12} md={12}>
        <Well>Welcome <b>{ this.props.app.userData.firstname }</b>!</Well>
        <Label bsStyle="success" bsSize="large">Users</Label>
        <Table responsive>
          <thead> 
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Country</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
          {
            this.props.app.users ?
            this.props.app.users.map((user, index) => {
              return (
                <tr key={index+1}>
                <td>{ index+1 }</td>
                <td>{ user.firstname }</td>
                <td>{ user.lastname }</td>
                <td>{ user.email }</td>
                <td>{ user.gender }</td>
                <td>{ user.country }</td>
                <td>{ user.username }</td>
              </tr>);
            }) : null
            }
          </tbody>
        </Table>
      </Col>
    </Row>
    );
  }
}

export default Home;
