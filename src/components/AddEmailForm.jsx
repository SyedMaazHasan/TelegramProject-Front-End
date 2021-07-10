import React, { Component } from "react";
import validator from "validator";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import axios from "axios";
import { apiEndPoint } from "../config.json";
class AddEmailForm extends Component {
  state = {
    Email: "",
    error: "",
  };
  change = (e) => {
    this.setState({ error: "" });
    e.preventDefault();
    const key = e.currentTarget.id;
    this.setState({ [key]: e.currentTarget.value });
  };
  submit = async (e) => {
    e.preventDefault();

    const result = validator.isEmail(this.state.Email);

    if (result == false) {
      this.setState({ error: "please enter valid email including @ " });
      return 0;
    } else {
      this.setState({ error: "" });
    }
    try {
      const data = {
        Email: this.state.Email,
        ApprovalStatus: false,
      };
      const result = await axios.post(apiEndPoint + "/emails/addEmail", data);
      console.log(result.data);
      console.log("result in register=", result);
      toast.success(result.data, { autoClose: 1500 });
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
        console.log("known error occourred", ex);
      } else {
        console.log("unknown error occourred", ex);
      }
    }
  };

  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        {this.state.error != "" && (
          <ToastContainer position="top-center">
            {toast.error(this.state.error)}
          </ToastContainer>
        )}

        <form>
          <div className="form-group">
            <label htmlFor="Email">Email address</label>
            <input
              type="email"
              className="form-control"
              id="Email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              onChange={this.change}
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            onClick={this.submit}
          >
            Add Email
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default AddEmailForm;
