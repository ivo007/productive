import Config from "../../config";

export function getPerson(cb) {
  organizationMemberships().then(
    function(res) {
      const memership = res.data.reduce(function(item) {
        return item.type === "organization_memberships";
      });

      cb(memership.relationships.person.data);
    }
  );
}

export function organizationMemberships() {
  const options = {
    headers: {
      "X-Auth-Token": process.env.REACT_APP_AUTH_TOKEN,
      "X-Organization-Id": process.env.REACT_APP_ORGANIZATION_ID
    }
  };

  return fetch(Config.api.root + "organization_memberships", options)
    .then(response => response.json())
    .catch(error => console.error(error));
}
