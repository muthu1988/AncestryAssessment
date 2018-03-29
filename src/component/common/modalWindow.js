import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Modal, Button } from 'react-bootstrap';
import * as CommonActions from '../../actions/common';

class ModalWindow extends Component {

  constructor(props){
      super(props);
      this.state = {};
      this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    this.props.dispatch(CommonActions.setReduxState({
        modal : { open : false, title: '', message: '', type: '' }
      }));
  }

  getBody(type, message) {
    if(type === 'error') {
        return (
            <div class="alert alert-danger" role="alert">
            <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
            <span class="sr-only">Error:</span>
                {message}
            </div>
        )
    } else {
        return message
    }
  }

  render() {
    return (
        <Modal show={this.props.modal.open} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.modal.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>  
            {this.getBody(this.props.modal.type, this.props.modal.message)}
          </Modal.Body>
          <Modal.Footer>
          <Button bsStyle="primary" onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
    );
  }
}

function mapStateToProps(state) {
    return {
      modal: state.modal ? state.modal : {}
    }
  }
  
export default connect(mapStateToProps)(ModalWindow);


