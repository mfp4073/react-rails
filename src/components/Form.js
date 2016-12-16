import React, { Component, PropTypes } from 'react';

class Form extends Component {
  static propTypes = {
    children: PropTypes.any,
  };

  state = {
    email: '',
    message: '',
  };

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  };

  render() {
    return (
      <form className="well">
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email"
            name="email"
            value={this.state.email} onChange={this.handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Message</label>
          <textarea name="message" className="form-control" value={this.state.message} onChange={this.handleChange}></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Country</label>
          <select className="form-control" >
            <option value="">-- Pick One --</option>
            <option value="us">US</option>
            <option value="uk">UK</option>
          </select>
        </div>
        <div className="checkbox">
          <label>
            <input type="checkbox" /> Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-default">Submit</button>
      </form>
    );
  }
}

export default Form;
