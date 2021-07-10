import React, { Component } from "react";
import Select from "react-select";
import getEmails from "./../services/emailService";
import { apiEndPoint } from "../config.json";
import axios from "axios";
class MainPage extends Component {
  state = {
    selectedEmail: null,
    emailOptions: [
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

  async componentDidMount() {
    const { data } = await getEmails();
    const getEmailOptions =
      Array.isArray(data) &&
      data.map((element) => ({
        value: element.Email,
        label: element.Email,
      }));
    console.log("getEmailOptions", getEmailOptions);
    this.setState({ emailOptions: getEmailOptions });
  }

  handleChange = (SelectedEmail) => {
    this.setState({
      selectedEmail: SelectedEmail,
    });
  };

  generateOTP = async (e) => {
    e.preventDefault();
    //make an axios call
    try {
      const data = {
        email: this.state.selectedEmail.value,
      };
      const result = await axios.post(apiEndPoint + "/OTPService/send", data);
      console.log(result.data);
      //set state to show OTP inputButton
      this.setState({ showOTPInputElement: true });
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
        console.log("known error occourred", ex);
      } else {
        console.log("unknown error occourred", ex);
      }
    }
  };
  handleOTPEntered = (e) => {
    e.preventDefault();
    this.setState({ OTPEntered: e.currentTarget.value });
  };

  submitOTP = async (e) => {
    //make an axios call
    try {
      const data = {
        otp: this.state.OTPEntered,
      };
      const result = await axios.post(apiEndPoint + "/OTPService/verify", data);
      console.log(result.data);
      //set state to hide submit OTP section
      this.setState({ showOTPInputElement: false });
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
      <div className="App">
        <div>please select an email id from dropdown to approve</div>
        <Select
          value={this.state.selectedEmail}
          onChange={this.handleChange}
          options={this.state.emailOptions}
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
                onChange={this.handleOTPEntered}
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
