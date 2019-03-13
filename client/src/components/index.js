import React from "react";
import axios from "axios";
import Table from "./table";

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datas: [],
      data: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4200/server")
      .then(response => {
        this.setState({ datas: JSON.parse(response.data) });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  tabRow() {
    console.log(this.state.datas);
    return this.state.datas.map(function(object, i) {
      return <Table obj={object} key={i} />;
    });
  }

  render() {
    return (
      <div className="container">
        <div className=" table table-responsive">
          <table className="table table-bordered table-bordered table-hover">
            <tr>
              <td>ID</td>
              <td>FName</td>
              <td>Lname</td>
              <td>Email</td>
              <td>Phone</td>
              <td>Link</td>
              <td>State</td>
              <td>City</td>
              <td>ZIP</td>
              <td>Edit</td>
              <td>Delete</td>
            </tr>
            <tbody>{this.tabRow()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}
