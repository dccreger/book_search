# Google Books Search

Google Books Search is a web application that allows users to search for books using the Google Books API, view search results, and save their favorite books to a personal reading list.

## Features

- **Search Books:** Users can search for books by entering keywords or phrases in the search bar. The application fetches book data from the Google Books API and displays search results.

- **View Book Details:** Users can view detailed information about each book in the search results, including the book title, author(s), description, and cover image.

- **Save Books:** Authenticated users can save books to their personal reading list by clicking the "Save" button next to a book. Saved books are stored in the database and can be viewed later in the user's profile.

- **Authentication:** The application supports user authentication, allowing users to create accounts, log in, and log out. Authentication is implemented using JSON Web Tokens (JWT) for secure communication between the client and server.

## Technologies Used

- **Frontend:** React.js, React Bootstrap, Apollo Client, Vite (for development)
- **Backend:** Node.js, Express.js, MongoDB, Mongoose, Apollo Server
- **Authentication:** JSON Web Tokens (JWT)
- **API:** Google Books API

## Contributing

Contributions are welcome! If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
