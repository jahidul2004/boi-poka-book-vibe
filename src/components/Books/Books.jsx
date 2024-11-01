import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch("../../../public/booksData.json")
            .then((res) => res.json())
            .then((data) => setBooks(data));
    }, []);

    console.log(books);
    return (
        <div>
            <h1 className="text-4xl font-bold text-center">Books</h1>
            <div className="grid grid-cols-3 gap-4 justify-between items-center">
                {books.map((book) => (
                    <Book key={book.bookId} book={book}></Book>
                ))}
            </div>
        </div>
    );
};

export default Books;
