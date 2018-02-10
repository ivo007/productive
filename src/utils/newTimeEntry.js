import React from "react";
import SkyLight from "react-skylight";
import DateMenu from "./dateMenu";
import { saveEntry } from "../api";
// import Button from "../components/Button";

class NewTimeEntry extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: "",
      note: "",
      person: "",
      time: "",
      value: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateTime = this.updateTime.bind(this);
  }

  _executeBeforeModalOpen() {
    console.log("Executed before open");
  }

  _executeAfterModalOpen() {
    console.log("Executed after open");
  }

  _executeBeforeModalClose() {
    console.log("Executed before close");
  }

  _executeAfterModalClose() {
    console.log("Executed after close");
  }

  _executeOnOverlayClicked() {
    console.log("Overlay clicked!");
  }

  updateTime(newDate) {
    this.setState({date: newDate});
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();

    saveEntry(this.state, function(response) {
      // close and rerender!
      console.log(response);
    });
  }

  render() {
    return (
      <div>
        <section>
          <button className={"btn btn-primary"} onClick={() => this.dialogWithCallBacks.show()}>New time entry</button>
          {/* <Button text={"New time entry"} type={"primary"} action={"new"} onClick={() => this.dialogWithCallBacks.show()} />*/}
        </section>
        <SkyLight
          afterClose={this._executeAfterModalClose}
          afterOpen={this._executeAfterModalOpen}
          beforeClose={this._executeBeforeModalClose}
          beforeOpen={this._executeBeforeModalOpen}
          onOverlayClicked={this._executeOnOverlayClicked}
          ref={ref => this.dialogWithCallBacks = ref}
          title="Add new time entry">

          <form onSubmit={this.handleSubmit}>
            <label htmlFor="date">Time</label>
            <DateMenu callback={this.updateTime}/>

            <label htmlFor={"note"}>
              Description:
              <input className={"form-control"} type="text" name={"note"} value={this.state.value} onChange={this.handleChange} />
            </label>
            <div width="50px">
              <input type="submit" value="Submit" className={"btn btn-success form-control"} />
            </div>
          </form>

        </SkyLight>
      </div>
    );
  }
}

NewTimeEntry.displayName = "New Time Entry";

export default NewTimeEntry;
