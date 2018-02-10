import React, { Component } from "react";
import { deleteTimeEntry } from "../api";
import PropTypes from "prop-types";

class Button extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  static get propTypes() {
    return {
      id: PropTypes.string,
      text: PropTypes.string,
      type: PropTypes.string,
      action: PropTypes.string
    };
  }

  handleClick(id, event) {
    const _obj = this;

    switch (this.props.action) {
      case "new":
        break;

      case "delete":
        deleteTimeEntry(id, function(response) {
          console.log("006", response);

          // force redraw if true
          if (response) {
            _obj.props.callback();
          }
        });
        break;

      case "edit":
        break;

      default: break;
    }
  }

  setClass() {
    return "btn btn-" + this.props.type;
  }

  render() {
    return <div>
      <button
        className={this.setClass()}
        onClick={this.handleClick.bind(this, this.props.id)}
      >
        {this.props.text}</button>
    </div>;
  }
}

export default Button;
