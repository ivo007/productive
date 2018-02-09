import React, { Component } from "react";
import PropTypes from "prop-types";
import {entries} from "../api";
import GenericTable from "./GenericTable";

class TimeEntries extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "test",
      age: "test",
      friend: "test"
    };
  }

  static get propTypes() {
    return {
      date: PropTypes.object,
      time: PropTypes.string,
      note: PropTypes.string
    };
  }

  componentDidMount() {
    entries(function(response) {
      console.log("I DID mount!");
      console.log(response);
    });
  }

  mapDataToProps(data) {
    return {
      name: data.title,
      age: 30,
      friend: data.body
    };
  }

  render() {
    const columns = [{
      Header: "Name",
      accessor: "name" // String-based value accessors!
    }, {
      Header: "Age",
      accessor: "age"
    }, {
      Header: "Friend Name",
      accessor: "friend"
    }];

    return (
      <div width="200px">
        <GenericTable data={this.state} columns={columns} />
      </div>
    );
  }
}

export default TimeEntries;
