const jwt = require("jsonwebtoken");

// set token secret and expiration date
const secret = "secret123";
const expiration = "2h";

module.exports = {
  // function for our authenticated routes
  authMiddleware: function (context) {
    const authHeader = context.req.headers.authorization;

    if (authHeader) {
      const token = authHeader.split("Bearer ")[1];

      if (token) {
        try {
          const { data } = jwt.verify(token, secret);
          context.user = data;
        } catch (error) {
          throw new Error("Invalid or expired token");
        }
      } else {
        throw new Error("Authorization token must be provided");
      }
    } else {
      throw new Error("Authorization header must be provided");
    }

    // send to next endpoint
    return context;
  },
  signToken: function ({ username, email, _id }) {
    const payload = { username, email, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
