import React, { Component } from "react";
import Select from "react-select";

class MainPage extends Component {
  state = {
    selectedEmail: null,
    options: [
      {
        value: "1",
        label: "EmailOne",
      },
      {
        value: "2",
        label: "EmailTwo",
      },
      {
        value: "3",
        label: "EmailThree",
      },
      {
        value: "4",
        label: "EmailFour",
      },
    ],
    showOTPInputElement: false,
  };

  handleChange = (value) => {
    this.setState({
      selectedEmail: value,
    });
  };
  generateOTP = () => {
    const Email = this.state.selectedEmail;
    //make an axios call

    //set state to show OTP inputButton
    this.setState({ showOTPInputElement: true });
  };

  submitOTP = () => {
    //make an axios call

    //set state to hide submit OTP section
    this.setState({ showOTPInputElement: false });
  };
  render() {
    return (
      <div className="App">
        <div>please select an email id from dropdown to approve</div>
        <Select
          value={this.state.selectedEmail}
          onChange={this.handleChange}
          options={this.state.options}
        />
        <div>
          Email:{" "}
          {this.state.selectedEmail ? this.state.selectedEmail.label : ""}
        </div>
        <div>
          value:{" "}
          {this.state.selectedEmail ? this.state.selectedEmail.value : ""}
        </div>
        {this.state.selectedEmail && !this.state.showOTPInputElement && (
          <button onClick={this.generateOTP}>
            click to generate OTP & Approve
          </button>
        )}
        {this.state.showOTPInputElement && (
          <>
            <div className="form-group">
              <label htmlFor="EnterOTP">Enter OTP</label>
              <input
                type="Password"
                className="form-control"
                id="EnterOTP"
                placeholder="EnterOTP"
                onChange={this.change}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={this.submitOTP}
            >
              Submit OTP
            </button>
          </>
        )}
      </div>
    );
  }
}

export default MainPage;
