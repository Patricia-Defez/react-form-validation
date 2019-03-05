import React, { Component } from 'react';

export default class Form extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      error: true
    }
  }
  onChange = (e)=>{
    // const name = e.target.name;
    // const value = e.target.value;

    this.setState({
      email: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addEmail(this.state.email)
  }

  render = () => (
    <form className="Form" onSubmit={this.onSubmit}>
      <div class="field">
        <label class="label">User email</label>
        <div class="control has-icons-left has-icons-right">
          <input class="input is-success" type="email" name="email" placeholder="User email" value={this.state.email}
          onChange={this.onChange} />
          <span class="icon is-small is-left">
            <i class="fas fa-user"></i>
          </span>

          <span class="icon is-small is-right">
            <i class="fas fa-check"></i>
          </span>
        </div>
        <p class="help is-success">This username is available</p>
        <p class="help is-danger">This email is invalid</p>
      </div>

      <div class="control">
        <button class="button is-link">Submit</button>
      </div>
    </form>
  );
}