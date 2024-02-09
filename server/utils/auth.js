const jwt = require("jsonwebtoken");

// Set token secret and expiration date
const secret = "secret123";
const expiration = "2h";

module.exports = {
  // Middleware function for authenticating routes
  authMiddleware: function ({ req }) {
    // Extract the token from the Authorization header
    const authHeader = req.headers.authorization;

    if (authHeader) {
      // Split the header to get the token part
      const token = authHeader.split("Bearer ")[1];

      if (token) {
        try {
          // Verify the token
          const decodedToken = jwt.verify(token, secret);
          // Set the user data in the context
          return { user: decodedToken };
        } catch (error) {
          // Throw an error if token is invalid or expired
          throw new Error("Invalid or expired token");
        }
      } else {
        // Throw an error if token is not provided
        throw new Error("Authorization token must be provided");
      }
    } else {
      // Throw an error if Authorization header is missing
      throw new Error("Authorization header must be provided");
    }
  },

  // Function for signing a token
  signToken: function ({ username, email, _id }) {
    const payload = { username, email, _id };
    // Sign the token with the payload, secret, and expiration
    return jwt.sign(payload, secret, { expiresIn: expiration });
  },
};
