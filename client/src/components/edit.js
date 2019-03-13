import React from "react";
import axios from "axios";

//import ReactDOM from "react-dom";

export default class Edit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      email: "",
      number: "",
      url: "",
      state: "",
      city: "",
      zip: ""
    };
    this.handelZip = this.handelZip.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFname = this.handleFname.bind(this);
    this.handleCity = this.handleCity.bind(this);
    this.handleLname = this.handleLname.bind(this);
    this.handleNumber = this.handleNumber.bind(this);
    this.handleState = this.handleState.bind(this);
    this.handleUrl = this.handleUrl.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
  }

  componentDidMount() {
    console.log(this.props.match.params.id);
    axios
      .get("http://localhost:4200/server/edit/" + this.props.match.params.id)
      .then(response => {
        this.setState({
          fname: response.data[0].fname,
          lname: response.data[0].lname,
          email: response.data[0].email,
          city: response.data[0].city,
          url: response.data[0].url,
          number: response.data[0].number,
          state: response.data[0].state,
          zip: response.data[0].zip
        });
      })

      .catch(function(error) {
        console.log(error);
      });
  }

  handleFname(e) {
    this.setState({ fname: e.target.value });
  }
  handleLname(e) {
    this.setState({ lname: e.target.value });
  }

  handleEmail(e) {
    this.setState({ email: e.target.value });
  }
  handleNumber(e) {
    this.setState({ number: e.target.value });
  }
  handleUrl(e) {
    this.setState({ url: e.target.value });
  }
  handleState(e) {
    this.setState({ state: e.target.value });
  }

  handleCity(e) {
    this.setState({ city: e.target.value });
  }
  handelZip(e) {
    this.setState({ zip: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const data = {
      fname: this.state.fname,
      lname: this.state.lname,
      email: this.state.email,
      number: this.state.number,
      url: this.state.url,
      state: this.state.state,
      city: this.state.city,
      zip: this.state.zip
    };
    console.log(this.props.match.params.id);
    axios
      .post(
        "http://localhost:4200/server/update/" + this.props.match.params.id,
        data
      )
      .then(res => {
        // console.log(res);
        console.log(res.data);
      });
    this.setState({
      fname: "",
      lname: "",
      email: "",
      number: "",
      url: "",
      state: "",
      city: "",
      zip: ""
    });
    this.props.history.push("/index");
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
          <h3>Edit the Contact</h3>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Fname:</label>
              <input
                type="text"
                value={this.state.fname}
                className="form-control"
                style={{
                  width: 600,
                  innerHeight: 50
                }}
                onChange={this.handleFname}
                required
              />
            </div>
            <div className="form-group">
              <label>Lname:</label>
              <input
                type="text"
                value={this.state.lname}
                className="form-control"
                style={{
                  width: 600,
                  innerHeight: 50
                }}
                onChange={this.handleLname}
                required
              />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                value={this.state.email}
                className="form-control"
                style={{
                  width: 600,
                  innerHeight: 50
                }}
                onChange={this.handleEmail}
                required
              />
            </div>
            <div className="form-group">
              <label>Phone:</label>
              <input
                type="number"
                value={this.state.number}
                className="form-control"
                style={{
                  width: 600,
                  innerHeight: 50
                }}
                onChange={this.handleNumber}
                required
              />
            </div>
            <div className="form-group">
              <label>Link:</label>
              <input
                type="url"
                value={this.state.url}
                className="form-control"
                style={{
                  width: 600,
                  innerHeight: 50
                }}
                onChange={this.handleUrl}
                required
              />
            </div>
            <div className="form-group">
              <label>State:</label>
              <input
                type="text"
                value={this.state.state}
                className="form-control"
                style={{
                  width: 600,
                  innerHeight: 50
                }}
                onChange={this.handleState}
                required
              />
            </div>
            <div className="form-group">
              <label>City:</label>
              <input
                type="text"
                value={this.state.city}
                className="form-control"
                style={{
                  width: 600,
                  innerHeight: 50
                }}
                onChange={this.handleCity}
                required
              />
            </div>
            <div className="form-group">
              <label>Zip Code:</label>
              <input
                type="number"
                value={this.state.zip}
                className="form-control"
                style={{
                  width: 600,
                  innerHeight: 50
                }}
                onChange={this.handelZip}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="submit"
                value="Update Contact"
                className="btn btn-primary"
              />
            </div>
          </form>
        </p>
      </div>
    );
  }
}
