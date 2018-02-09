import Config from "../../config";

export function getEntries(person_id, cb) {
  timeEntries().then(
    function(res) {
      console.log(res);
      // const memership = res.data.reduce(function(item) {
      //   return item.type === "organization_memberships";
      // });

      cb(res.data);
    }
  );
}

function timeEntries() {
  const options = {
    headers: {
      "X-Auth-Token": process.env.REACT_APP_AUTH_TOKEN,
      "X-Organization-Id": process.env.REACT_APP_ORGANIZATION_ID
    }
  };

  return fetch(Config.api.root + "time_entries", options)
    .then(response => response.json())
    .catch(error => console.error(error));
}
