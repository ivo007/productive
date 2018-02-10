import Config from "../../config";

// ### GETTING

// fetch
function timeEntries(personId) {
  const options = {
    headers: {
      "X-Auth-Token": process.env.REACT_APP_AUTH_TOKEN,
      "X-Organization-Id": process.env.REACT_APP_ORGANIZATION_ID
    }
  };

  return fetch(Config.api.root + "time_entries?filter[person_id]=" + personId, options)
    .then(response => response.json())
    .catch(error => console.error(error));
}

function mergeIncludes(resource, personId, keys) {
  const response = [];

  // data object is needed whole
  response.data = resource.data;

  // cycle through keys that need to be merged into response object
  keys.map(function(key) {
    return (function() {
      // cycle included object to find the objects needed
      resource.included.map(function(model) {
        // find matching object
        if (model.type === key) {
          switch (model.type) {
            case "people":

              // included object can have a lot of people: we want only the one that was specified
              if (parseInt(model.id, 10) === parseInt(personId, 10)) {
                response.person = {
                  name: model.attributes.first_name,
                  surname: model.attributes.last_name,
                  image: model.attributes.avatar_url
                };
              }
              break;

            case "projects":

              response.project = {
                name: model.attributes.name
              };
              break;

            default: break;
          }
        }

        return true;  // ESLint/Webpack wants a return value
      });
    }()); // <= immediately invoke encapsulated function (so we can have "key" variable in the scope
  });

  return response;
}

export function getEntries(personId, cb) {
  // get all time entries for that person
  timeEntries(personId).then(
    function(res) {
      // extract only data that is needed
      cb(mergeIncludes(res, personId, ["people", "projects"]));
    }
  );
}


// ### DELETING

// fetch
function executeDelete(id) {
  const options = {
    method: "DELETE",
    headers: {
      "X-Auth-Token": process.env.REACT_APP_AUTH_TOKEN,
      "X-Organization-Id": process.env.REACT_APP_ORGANIZATION_ID
    }
  };

  return fetch(Config.api.root + "time_entries/" + id, options)
    .then(() => true)
    .catch(() => false);
}

export function deleteEntry(id, cb) {
  executeDelete(id).then(function(res) {
    // fire the callback!
    cb(res);
  });
}


// ### SETTING

// fetch
function updateEntry(data) {

  /**
   * Could not get POST to work,
   * cannot pinpoint how payload must look like
   * (documentation here is not helping)
   */

  const options = {
    method: "POST",
    body: data,
    headers: {
      "X-Auth-Token": process.env.REACT_APP_AUTH_TOKEN,
      "X-Organization-Id": process.env.REACT_APP_ORGANIZATION_ID
    }
  };

  return fetch(Config.api.root + "time_entries", options)
    .then(response => response)
    .catch(error => console.error(error));
}

export function setEntry(data, cb) {
  updateEntry(data).then(function(res) {
    // fire the callback!

    cb(res);
  });
}
