/**
 * - get all organization_memberships
 * -
 */

import { getPerson } from "./resources/OrganizationMemberships";
import { getEntries } from "./resources/TimeEntries";
// organizationMemberships().then(
//   function(res) {
//     console.log(res);
//   }
// );

export function entries(cb) {
  getPerson(function(person) {
    console.log(person.id);

    getEntries(person.id, function(response) {
      /**
       * data:
       *  tko je radio = relationships/person/data
       *  koliko minuta = attributes/billable_time
       *  na koji dan = attributes/date
       *  na kojem projektu = ?
       *  opis posla = attributes/note
       */
      cb(response);
    });
  });
}
