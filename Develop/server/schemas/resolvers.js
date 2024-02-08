const { User } = require("./models");

const resolvers = {
  Query: {
    me: async (_, args, context) => {
      if (context.user) {
        return await User.findById(context.user._id);
      }
      throw new Error("Not authenticated");
    },
  },
  Mutation: {
    login: async (_, { email, password }) => {
      // Implement login logic here
    },
    addUser: async (_, { username, email, password }) => {
      // Implement add user logic here
    },
    saveBook: async (_, { bookData }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id);
        user.savedBooks.push(bookData);
        await user.save();
        return user;
      }
      throw new Error("Not authenticated");
    },
    removeBook: async (_, { bookId }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id);
        user.savedBooks = user.savedBooks.filter(
          (book) => book.bookId !== bookId
        );
        await user.save();
        return user;
      }
      throw new Error("Not authenticated");
    },
  },
};

module.exports = resolvers;
