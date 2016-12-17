import React, { Component, PropTypes } from 'react';

import validator from '../util/validator';

class Form extends Component {
  static propTypes = {
    children: PropTypes.any,
  };

  state = {
    email: { type: 'email', required: true, value: '' },
    message: { type: 'message', required: true, value: '' },
    country: { value: '' },
    checked: { value: false },
  };

  handleChange = (event) => {
    const target = event.target;
    this.setState((prevState) => {
      return {[target.name]: {
        ...prevState[target.name],
        value: target.value
      }};
    });
  };

  handleCheckboxChange = (event) => {
    this.setState({[event.target.name]: { value: event.target.checked }});
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const stateWithErrorsIfAny = validator(this.state);

    if (this.state === stateWithErrorsIfAny) {
      // submit
      return;
    }

    this.setState(stateWithErrorsIfAny);

    // if (!this.state.email.value.match()) {
    //   this.setState((prevState) => {
    //     return {
    //       email: {
    //         ...prevState.email,
    //         error: 'Not a good one'
    //       }
    //     };
    //   });
    // }

    console.log(this.state);
  };

  render() {
    return (
      <form className="well" onSubmit={this.handleSubmit} noValidate>
        <div className={`form-group ${this.state.email.error ? 'has-error' : ''}`}>
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email"
            name="email"
            value={this.state.email.value} onChange={this.handleChange} />
          <p className="help-block text-danger">{this.state.email.error}</p>
        </div>
        <div className={`form-group ${this.state.message.error ? 'has-error' : ''}`}>
          <label htmlFor="exampleInputEmail1">Message</label>
          <textarea name="message" className="form-control" value={this.state.message.value} onChange={this.handleChange}></textarea>
          <p className="help-block text-danger">{this.state.message.error}</p>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Country</label>
          <select className="form-control" name="country" value={this.state.country.value} onChange={this.handleChange}>
            <option value="">-- Pick One --</option>
            <option value="us">US</option>
            <option value="uk">UK</option>
          </select>
        </div>
        <div className="checkbox">
          <label>
            <input type="checkbox" name="checked" checked={this.state.checked.value} onChange={this.handleCheckboxChange} /> Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-default">Submit</button>
      </form>
    );
  }
}

export default Form;
