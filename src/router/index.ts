import express from "express";

import authentication from "./authentication";
import users from "./users";

// const router = express.Router();

export default (router: express.Router): express.Router => {
  authentication(router);
  users(router);

  return router;
};
