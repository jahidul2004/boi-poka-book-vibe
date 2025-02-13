import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch("/booksData.json")
            .then((res) => res.json())
            .then((data) => setBooks(data));
    }, []);

    console.log(books);
    return (
        <div>
            <h1 className="text-4xl font-bold text-center">Books</h1>
            <div className="m-auto grid justify-between grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 my-5">
                {books.map((book) => (
                    <Book key={book.bookId} book={book}></Book>
                ))}
            </div>
        </div>
    );
};

export default Books;
