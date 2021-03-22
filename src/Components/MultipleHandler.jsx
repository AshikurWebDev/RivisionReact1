import React, { Component } from "react";

export class MultipleHandler extends Component {
  constructor() {
    super();
    this.state = {
      username: " ",
    };
  }

  onChnageHandler = (event) => {
    let myname = event.target.name;
    let myvalue = event.target.value;

    this.setState({[myname] : myvalue})
  };

  onSubmitHandler = ()=>{

  }
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card my-5">
              <div className="card-header">My First Form</div>
              <div className="card-body">
                <form onSubmit={this.onSubmitHandler}>
                  <p>{this.state.username}</p>
                  <div className="form-group">
                    <input
                      type="text"
                      name="username"
                      onChange={this.onChnageHandler}
                      placeholder="Your Name"
                      className="form-control"
                    />
                  </div>
                  <br />
                  <div className="form-group">
                    <input
                      type="submit"
                      value="Submit"
                      className="btn btn-success float-start"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MultipleHandler;
