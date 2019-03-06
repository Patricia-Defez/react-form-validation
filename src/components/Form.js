import React, { Component } from 'react';


const validator = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test;

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      error: true,
      touch: false
    }
  }


  onChange = (e)=>{
    const isEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value);

    this.setState({
      email: e.target.value,
      error: !isEmail
    })
  }
  handleBlur = (e) =>{
    this.setState({ touch: true}); 
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addEmail(this.state.email)
    this.reset(e)
  }

  reset = e => (e.target.value = '')

  render = () => (
    <form className="Form" onSubmit={this.onSubmit}>
        <div className="field">
            <label className="label">User email</label>
            <div className="control has-icons-left has-icons-right">
                <input className="input is-success" type="email" name="email" placeholder="User email" value={this.state.email}
                onChange={this.onChange} onBlur={this.handleBlur}  />
                <span className="icon is-small is-left">
                    <i className="fas fa-user"></i>
                </span> 

                {this.state.touch && this.state.error && (
                    <span className="icon is-small is-right">
                        <i className="fas fa-exclamation-triangle"></i>
                    </span>               

                )}

                {this.state.touch && !this.state.error && (
                    <span className="icon is-small is-right">
                        <i className="fas fa-check"></i>
                    </span>
                )}

            </div>

            {this.state.touch && !this.state.error && (
                <p className="help is-success">This email is available</p>
            )}
            {this.state.touch && this.state.error && (
                <p className="help is-danger">This email is invalid</p>
            )}    
        </div>

        <div className="control">
            <button type="submit" className="button is-link" disabled = {this.state.error}>Submit</button>
        </div>
    </form>
  );
}