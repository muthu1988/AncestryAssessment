import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';

class FiledGroup extends Component {

  render() {
    return (
        <FormGroup controlId={this.props.id} validationState={this.props.validationState}>
            <ControlLabel>{this.props.label}</ControlLabel>
            <FormControl {...this.props} />
            <FormControl.Feedback />
            {this.props.help && <HelpBlock>{this.props.help}</HelpBlock>}
        </FormGroup>
    );
  } 
}

export default FiledGroup;


