import React, { Component } from "react";
import ReactTable from "react-table";
import PropTypes from "prop-types";

class GenericTable extends Component {
  // constructor(props) {
  //   super(props);
  // }

  static get propTypes() {
    return {
      data: PropTypes.array,
      columns: PropTypes.array
    };
  }

  render() {
    return (
      <ReactTable
        minRows={0}
        showPagination={false}
        data={this.props.data}
        columns={this.props.columns}
      />
    );
  }
}

export default GenericTable;
