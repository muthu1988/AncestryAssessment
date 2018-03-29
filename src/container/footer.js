import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

class Footer extends Component {
  render() {
    return (
        <Row className="show-grid footer">
          <Col xs={12} md={12}>
                @2018 Ancestry
          </Col>
        </Row>
    );
  } 
}

export default Footer;


