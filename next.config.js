const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "antonnext31",
        mongodb_password: "48YPn8s6h3PXmBVu",
        mongodb_clustername: "cluster0",
        mongodb_database: "my-blog",
      },
    };
  }

  return {
    env: {
      mongodb_username: "antonnext31",
      mongodb_password: "48YPn8s6h3PXmBVu",
      mongodb_clustername: "cluster0",
      mongodb_database: "my-blog-dev",
    },
  };
};
