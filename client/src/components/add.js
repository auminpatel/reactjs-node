import React from "react";
import axios from "axios";
//import ReactDOM from "react-dom";

export default class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        fname: "",
        lname: "",
        email: "",
        number: "",
        url: "",
        state: "",
        city: "",
        zip: ""
      },
      errors: {
        fname: "",
        lname: "",
        email: "",
        number: "",
        url: "",
        state: "",
        city: "",
        zip: ""
      }
    };
    this.handleValidation = this.handleValidation.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleValidation() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["fname"]) {
      formIsValid = false;
      errors["fname"] = "Cannot be empty";
    }
    if (typeof fields["fname"] !== "undefined") {
      if (!fields["fname"].match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors["fname"] = "Only letters";
      }
    }

    if (!fields["lname"]) {
      formIsValid = false;
      errors["lname"] = "Cannot be empty";
    }
    if (typeof fields["lname"] !== "undefined") {
      if (!fields["lname"].match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors["lname"] = "Only letters";
      }
    }
    if (!fields["city"]) {
      formIsValid = false;
      errors["city"] = "Cannot be empty";
    }
    if (typeof fields["city"] !== "undefined") {
      if (!fields["city"].match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors["city"] = "Only letters";
      }
    }

    if (!fields["state"]) {
      formIsValid = false;
      errors["state"] = "Cannot be empty";
    }
    if (typeof fields["state"] !== "undefined") {
      if (!fields["state"].match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors["state"] = "Only letters";
      }
    }

    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "Cannot be empty";
    }
    if (typeof fields["email"] !== "undefined") {
      if (
        !fields["email"].match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
      ) {
        formIsValid = false;
        errors["email"] = "Enter a proper email";
      }
    }

    if (!fields["url"]) {
      formIsValid = false;
      errors["url"] = "Cannot be empty";
    }
    if (typeof fields["url"] !== "undefined") {
      if (
        !fields["url"].match(
          /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/
        )
      ) {
        formIsValid = false;
        errors["url"] = "Not a proper url";
      }
    }

    if (!fields["number"]) {
      formIsValid = false;
      errors["number"] = "Cannot be empty";
    }
    if (typeof fields["number"] !== "undefined") {
      if (!fields["number"].match(/^[6-9]\d{9}$/)) {
        formIsValid = false;
        errors["number"] = "enter a proper number";
      }
    }
    if (!fields["zip"]) {
      formIsValid = false;
      errors["zip"] = "Cannot be empty";
    }
    if (typeof fields["zip"] !== "undefined") {
      if (!fields["zip"].match(/^\d{6}$/)) {
        formIsValid = false;
        errors["zip"] = "enter a proper zipcode";
      }
    }
    this.setState({ errors: errors });
    return formIsValid;
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.handleValidation()) {
      alert("Form Submitted");
      let data = {
        fname: this.state.fields["fname"],
        lname: this.state.fields["lname"],
        email: this.state.fields["email"],
        number: this.state.fields["number"],
        url: this.state.fields["url"],
        state: this.state.fields["state"],
        city: this.state.fields["city"],
        zip: this.state.fields["zip"]
      };
      axios.post("http://localhost:4200/server/add", data).then(res => {
        // console.log(res);
        console.log(res.data);
      });

      this.setState({
        fields: {
          fname: "",
          lname: "",
          email: "",
          number: "",
          url: "",
          state: "",
          city: "",
          zip: ""
        },
        errors: {
          fname: "",
          lname: "",
          email: "",
          number: "",
          url: "",
          state: "",
          city: "",
          zip: ""
        }
      });
    } else {
      alert("Form has Errors");
    }
  }
  handleChange(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
  }
  render() {
    return (
      <div style={{ marginTop: 30 }}>
        <p
          style={{
            borderStyle: 30,
            backgroundColor: "rgb(211,211,211)",
            boxShadow: "grey",
            paddingTop: 30,
            paddingBottom: 30,
            paddingLeft: 40,
            paddingRight: 40
          }}
        >
          <h3>Add Contact</h3>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <div className="form-group">
              <label style={{ fontWeight: "bold" }}>First Name:</label>
              <input
                ref="fname"
                type="text"
                placeholder="First Name"
                className="form-control"
                style={{
                  width: 600,
                  innerHeight: 50
                }}
                required
                onChange={this.handleChange.bind(this, "fname")}
                value={this.state.fields["fname"]}
              />
              <span style={{ color: "red" }}>{this.state.errors["fname"]}</span>
              <br />
            </div>
            <div className="form-group">
              <label style={{ fontWeight: "bold" }}>Last Name:</label>
              <input
                ref="lname"
                type="text"
                placeholder="Last Name"
                className="form-control"
                style={{
                  width: 600,
                  innerHeight: 48
                }}
                required
                onChange={this.handleChange.bind(this, "lname")}
                value={this.state.fields["lname"]}
              />
              <span style={{ color: "red" }}>{this.state.errors["lname"]}</span>
              <br />
            </div>
            <div className="form-group">
              <label style={{ fontWeight: "bold" }}>Email:</label>
              <input
                ref="email"
                type="email"
                placeholder="Email"
                className="form-control"
                style={{
                  width: 600,
                  innerHeight: 48
                }}
                required
                onChange={this.handleChange.bind(this, "email")}
                value={this.state.fields["email"]}
              />
              <span style={{ color: "red" }}>{this.state.errors["email"]}</span>
              <br />
            </div>
            <div className="form-group">
              <label style={{ fontWeight: "bold" }}>Phone Number:</label>
              <input
                ref="number"
                type="number"
                placeholder="Phone Number"
                className="form-control"
                style={{
                  width: 600,
                  innerHeight: 48
                }}
                required
                onChange={this.handleChange.bind(this, "number")}
                value={this.state.fields["number"]}
                minLength="10"
                maxLength="10"
              />
              <span style={{ color: "red" }}>
                {this.state.errors["number"]}
              </span>
              <br />
            </div>
            <div className="form-group">
              <label style={{ fontWeight: "bold" }}>
                Links(Social Networking sites or Personal Websites):
              </label>
              <input
                ref="url"
                type="url"
                placeholder="Link"
                className="form-control"
                style={{
                  width: 600,
                  innerHeight: 48
                }}
                required
                onChange={this.handleChange.bind(this, "url")}
                value={this.state.fields["url"]}
              />
              <span style={{ color: "red" }}>{this.state.errors["url"]}</span>
              <br />
            </div>
            <div className="form-group">
              <label style={{ fontWeight: "bold" }}>State:</label>
              <input
                ref="state"
                type="text"
                placeholder="State"
                className="form-control"
                style={{
                  width: 600,
                  innerHeight: 48
                }}
                required
                onChange={this.handleChange.bind(this, "state")}
                value={this.state.fields["state"]}
              />{" "}
              <span style={{ color: "red" }}>{this.state.errors["state"]}</span>
              <br />
            </div>
            <div className="form-group">
              <label style={{ fontWeight: "bold" }}>City:</label>
              <input
                ref="city"
                type="text"
                placeholder="City"
                className="form-control"
                style={{
                  width: 600,
                  innerHeight: 48
                }}
                required
                onChange={this.handleChange.bind(this, "city")}
                value={this.state.fields["city"]}
              />
              <span style={{ color: "red" }}>{this.state.errors["city"]}</span>
              <br />
            </div>
            <div className="form-group">
              <label style={{ fontWeight: "bold" }}>Zip Code:</label>
              <input
                ref="zip"
                type="number"
                placeholder="ZIP Code"
                className="form-control"
                style={{
                  width: 600,
                  innerHeight: 48
                }}
                required
                onChange={this.handleChange.bind(this, "zip")}
                value={this.state.fields["zip"]}
                maxLength="6"
              />
              <span style={{ color: "red" }}>{this.state.errors["zip"]}</span>
              <br />
            </div>
            <div className="form-group">
              <input type="submit" value="ADD" className="btn btn-primary" />
            </div>
          </form>
        </p>
      </div>
    );
  }
}
