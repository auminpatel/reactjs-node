import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
export default class Table extends React.Component {
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
  }

  delete() {
    axios
      .get("http://localhost:4200/server/delete/" + this.props.obj.id)
      .then(console.log("Deleted"))
      .catch(err => console.log(err));
    this.forceUpdate();
  }
  render() {
    return (
      <tr>
        <td className="text text-center">{this.props.obj.id}</td>
        <td className="text text-center">{this.props.obj.fname}</td>
        <td className="text text-center">{this.props.obj.lname}</td>
        <td className="text text-center">{this.props.obj.email}</td>
        <td className="text text-center">{this.props.obj.number}</td>
        <td className="text text-center">{this.props.obj.url}</td>
        <td className="text text-center">{this.props.obj.state}</td>
        <td className="text text-center">{this.props.obj.city}</td>
        <td className="text text-center">{this.props.obj.zip}</td>
        <td className="text text-center">
          <Link to={"/edit/" + this.props.obj.id} className="btn btn-primary">
            Edit
          </Link>
        </td>
        <td className="text text-center">
          <button onClick={this.delete} className="btn btn-danger">
            Delete
          </button>
        </td>
      </tr>
    );
  }
}
