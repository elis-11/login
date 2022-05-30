import { useEffect, useState } from "react";
import { useDataContext } from "../../context/DataProvider";
import { fetchBooksApi } from "../helpers/apiCalls";

export const Dashboard = () => {

const {user, setErrors}= useDataContext()

  const [books, setBooks] = useState([]);

  // fetch data from backend load
  useEffect(() => {
    // fetch books from API
    const fetchBooks = async () => {
      const result = await fetchBooksApi();
      if (result.error) {
      return console.log("[OUCH]", result.error);
      }
      // fetch data successfully
      setBooks(result);
    };

    if(user) {
      fetchBooks();
    }
    else{
      setErrors("You aren't logged in!")
    }
  }, []); // just on first load!

  return (
    <div className="dashboard">
      {/* <h2>Your private area. Enjoy!</h2>
    <p>I hope, your books will get listed here... next monday!</p> */}
    <div className="books">
      {books.map((book) => (
        <div className="book" key={book._id}>
          <div>{book.title}</div>
          <div> {book.author}</div>
        </div>
      ))}
      </div>
    </div>
  );
};
