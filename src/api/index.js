/**
 * Main API entry point
 * From here the code points to different resources
 */

// import React, { Component } from "react";
import { getPerson } from "./resources/OrganizationMemberships";
import { getEntries, deleteEntry, setEntry } from "./resources/TimeEntries";

export function entries(cb) {
  getPerson(function(person) {
    getEntries(person.id, function(response) {
      /**
       * data:
       *  tko je radio = relationships/person/data
       *  koliko minuta = attributes/billable_time
       *  na koji dan = attributes/date
       *  na kojem projektu = ?
       *  opis posla = attributes/note
       */
      const data = response.data.map(function(item) {
        return {
          id: item.id,
          duration: item.attributes.billable_time,
          date: item.attributes.date,
          note: item.attributes.note,
          // note: <Note data={[item.attributes.note]} />, // could not get this outputted as a HTML! :(
          // note: <Note data={[<ul><li>Reading and understanding task spec</li></ul>]} />,
          person_name: response.person.name + " " + response.person.surname,
          project_name: response.project.name
        };
      });

      cb(data);
    });
  });
}

export function deleteTimeEntry(id, cb) {
  deleteEntry(id, function(response) {
    // fire the callback!
    cb(response);
  });
}

export function saveEntry(id, cb) {
  console.log("01");
  setEntry(id, function(response) {
    // fire the callback!
    cb(response);
  });
}

// class Note extends Component {
//   render() {
//     return <div>{this.props.data}</div>;
//   }
// }
