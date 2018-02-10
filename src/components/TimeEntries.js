import React, { Component } from "react";
// import PropTypes from "prop-types";
import {entries} from "../api";
import GenericTable from "./GenericTable";
import Button from "./Button";
import Popup from "../utils/newTimeEntry";

class TimeEntries extends Component {
  constructor(props) {
    super(props);

    this.update = this.update.bind(this);

    this.state = {
      data: [{
        id: "",
        person_name: "",
        duration: "",
        date: "",
        project_name: "",
        note: "",
        actions: ""
      }]
    };
  }

  /*
  static get propTypes() {
    return {
      person_name: PropTypes.string,
      duration: PropTypes.number,
      date: PropTypes.date,
      project_name: PropTypes.string,
      note: PropTypes.string
    };
  }
  */

  componentDidMount() {
    // move the code to another function because child Button also triggers re-render
    this.update();
  }

  update() {
    const _obj = this;
    entries(function(response) {
      // @TODO: filter our just today's entries !!!!!!!!!!!!

      // add actions buttons to each item
      response = response.map(function(item) {
        item.actions = <Button
          text={"Delete"}
          type={"danger"}
          action={"delete"}
          id={item.id}
          callback={_obj.update}
        />;
        return item;
      });

      console.log("rerender!");
      _obj.setState({data: response});
    });
  }

  render() {
    const columns = [{
      Header: "Person",
      accessor: "person_name" // String-based value accessors!
    }, {
      Header: "Duration",
      accessor: "duration"
    }, {
      Header: "Date",
      accessor: "date"
    }, {
      Header: "Project",
      accessor: "project_name"
    }, {
      Header: "Description",
      accessor: "note"
    }, {
      Header: "Actions",
      accessor: "actions"
    }];

    return (
      <div>
        <Popup
          text={"New time entry"}
          type={"primary"}
          action={"new"}
        />
        {/* <Button text={"New time entry"} type={"primary"} action={"new"} onClick={this.openPopup()} /> */}
        <GenericTable
          data={this.state.data}
          columns={columns}
        />
      </div>
    );
  }
}

export default TimeEntries;
