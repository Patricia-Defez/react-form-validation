import React, { Component } from 'react';

const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

export default class Form extends Component {
  state = {
    email: '',
    error: true,
    touch: false
  }

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
      error: !emailRegexp.test(value)
    })
  }

  handleBlur = (e) => this.setState({ touch: true });

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.addEmail(this.state.email);

    this.setState({
      email: '',
      error: true,
      touch: false
    })
  }

  render = () => {
    let inputClassName = 'input';
    
    if (this.state.touch) {
      inputClassName = inputClassName + ' ' + (this.state.error ? 'is-danger' : 'is-success');
    }

    return (
      <form className="Form" onSubmit={this.handleSubmit}>
        <div className="field">
          <label className="label">Email</label>
          <div className="control has-icons-left has-icons-right">
            <input className={inputClassName} name="email" type="text" placeholder="Email"
              value={this.state.email} onChange={this.handleChange} onBlur={this.handleBlur} />

            <span className="icon is-small is-left">
              <i className="fas fa-at"></i>
            </span>

            <span className="icon is-small is-right">
              {this.state.touch && !this.state.error && (
                <i className="fas fa-check"></i>
              )}

              {this.state.touch && this.state.error && (
                <i className="fas fa-exclamation-triangle"></i>
              )}
            </span>
          </div>

          {this.state.touch && this.state.error && (
            <p className="help is-danger">This email is invalid</p>
          )}

          {this.state.touch && !this.state.error && (
            <p className="help is-success">This email is valid</p>
          )}
        </div>

        <div className="control">
          <button className="button is-link" disabled={this.state.error}>Add Email</button>
        </div>
      </form>
    );
  }
}