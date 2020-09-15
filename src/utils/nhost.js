import nhost from "nhost-js-sdk";

const config = {
  base_url: "https://backend-je5dyp0j.nhost.app",
};

nhost.initializeApp(config);

const auth = nhost.auth();
const storage = nhost.storage();

export { auth, storage };