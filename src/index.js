// Absolute Imports
import React from "react";
import { render } from "react-dom";

// Relative Imports
import "./styles/style.scss";

export default class Index extends React.Component {
  constructor() {
    super();
    this.state = {
      currentstep: 1,
      username: "",
      email: "",
      password: "",
      avatar: "",
      fullname: "",
      country: "",
      about: "",
      cardno: "",
      month: "",
      cardname: ""
    };
  }
  handleNext = () => {
    if (this.state.currentstep === 1) {
      this.setState({ currentstep: 2 });
    }
    if (this.state.currentstep === 2) {
      this.setState({ currentstep: 3 });
    }
  };
  handlePrevious = () => {
    if (this.state.currentstep === 2) {
      this.setState({ currentstep: 1 });
    }
    if (this.state.currentstep === 3) {
      this.setState({ currentstep: 2 });
    }
  };
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  hanndleAlert = () => {
    const {
      email,
      username,
      password,
      avatar,
      fullname,
      country,
      about,
      cardno,
      month,
      cardname
    } = this.state;
    alert(`Your registration detail: \n 
      Email: ${email} \n 
      Username: ${username} \n
      Password: ${password} \n 
      avatar: ${avatar} \n 
      fullname: ${fullname} \n
      country: ${country} \n 
      about: ${about} \n 
      cardno: ${cardno} \n
      month: ${month} \n 
      cardname: ${cardname}`);
  };

  handleSubmit = event => {
    event.preventDefault();
    alert("enter next page");
  };

  step1 = () => {
    return (
      <div className="step1">
        <div className="step1-header">
          <img src="add-user.png" alt="" />
          <p className="step1-header-text">Sign-up to create account</p>
        </div>
        <div className="step1-nav">
          <div className="step1-nav-ac">
            <p className="step1-nav-1">1</p>
            <p className="step1-nav-acc">Account Information</p>
          </div>
          <div className="step1-nav-pi">
            <p className="step1-nav-2">2</p>
            <p className="step1-nav-pii">Personal Information</p>
          </div>
          <div className="step1-nav-pd">
            <p className="step1-nav-3">3</p>
            <p className="step1-nav-pdd">Payment Details</p>
          </div>
        </div>
        <div className="hero">
          <label>
            Username
            <input
              type="text"
              name="username"
              onChange={this.handleChange}
              value={this.state.name}
            />
          </label>
          <label>
            Email
            <input
              type="email"
              name="email"
              onChange={this.handleChange}
              value={this.state.email}
            />
          </label>
          <label>
            Password
            <input
              type="password"
              name="password"
              onChange={this.handleChange}
              value={this.state.password}
            />
          </label>
          <label>
            Select avatar
            <input
              type="file"
              name="avatar"
              onChange={this.handleChange}
              value={this.state.avatar}
            />
          </label>
        </div>
        <div className="footer">
          <p>Step 1 of 3</p>
          <div>
            <button onClick={this.handleNext} className="next-step-btn">
              Next step
            </button>
          </div>
        </div>
      </div>
    );
  };
  step2 = () => {
    return (
      <div className="step2">
        <div className="step2-header">
          <img src="user.png" alt="" />
          <p className="step2-header-text">Create an account for full access</p>
        </div>
        <div className="step2-nav">
          <div className="step2-nav-ac">
            <p className="step2-nav-1">1</p>
            <p className="step2-nav-acc">Account Information</p>
          </div>
          <div className="step2-nav-pi">
            <p className="step2-nav-2">2</p>
            <p className="step2-nav-pii">Personal Information</p>
          </div>
          <div className="step2-nav-pd">
            <p className="step2-nav-3">3</p>
            <p className="step2-nav-pdd">Payment Details</p>
          </div>
        </div>
        <div className="hero">
          <label>
            Full name
            <input
              type="text"
              name="fullname"
              onChange={this.handleChange}
              value={this.state.fullname}
            />
          </label>
          <label>
            Country
            <select>
              <option value="india">Select Country</option>
              <option value="india">india</option>
              <option value="china">china</option>
              <option value="srilanka">srilanka</option>
            </select>
          </label>
          <label>
            About you
            <textarea
              rows="4"
              cols="50"
              name="about"
              onChange={this.handleChange}
              value={this.state.about}
            />
          </label>
        </div>
        <div className="footer">
          <p>Step 2 of 3</p>
          <div>
            <button onClick={this.handlePrevious} className="cancel-btn">
              Previous
            </button>
            or
            <button onClick={this.handleNext} className="next-step-btn">
              Next step
            </button>
          </div>
        </div>
      </div>
    );
  };
  step3 = () => {
    return (
      <div className="step3">
        <div className="step3-header">
          <img src="user.png" alt="" />
          <p className="step3-header-text">Create an account for full access</p>
        </div>
        <div className="step3-nav">
          <div className="step3-nav-ac">
            <p className="step3-nav-1">1</p>
            <p className="step3-nav-acc">Account Information</p>
          </div>
          <div className="step3-nav-pi">
            <p className="step3-nav-2">2</p>
            <p className="step3-nav-pii">Personal Information</p>
          </div>
          <div className="step3-nav-pd">
            <p className="step3-nav-3">3</p>
            <p className="step3-nav-pdd">Payment Details</p>
          </div>
        </div>
        <div className="hero">
          <label>
            Payment
            <img src="" alt="" />
          </label>
          <label>
            Credit Card #
            <input
              type="number"
              name="cardno"
              onChange={this.handleChange}
              value={this.state.cardno}
            />
          </label>
          <label>
            Experation date
            <input
              type="month"
              name="month"
              onChange={this.handleChange}
              value={this.state.month}
            />
          </label>
          <label>
            Name on card
            <input
              type="text"
              name="cardname"
              onChange={this.handleChange}
              value={this.state.cardname}
            />
          </label>
        </div>
        <div className="footer">
          <p>Step 3 of 3</p>
          <div>
            <button onClick={this.handlePrevious} className="cancel-btn">
              Previous
            </button>
            or
            <input
              onClick={this.hanndleAlert}
              className="next-step-btn"
              type="submit"
              value="Submit"
            />
          </div>
        </div>
      </div>
    );
  };
  handleView = () => {
    switch (this.state.currentstep) {
      case 1:
        return this.step1();
        break;
      case 2:
        return this.step2();
        break;
      case 3:
        return this.step3();
        break;
      default:
        return this.step1;
    }
  };
  render() {
    return (
      <div className="wrapper">
        <form>{this.handleView()}</form>
      </div>
    );
  }
}

render(<Index />, document.getElementById("root"));
