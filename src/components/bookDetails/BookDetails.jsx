import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BookDetails = () => {
    const [bookData, setBookData] = useState();

    const id = useParams().id;

    console.log(id);

    useEffect(() => {
        fetch("/booksData.json")
            .then((res) => res.json())
            .then((data) => {
                data.map((book) => {
                    if (book.bookId === parseInt(id)) {
                        setBookData(book);
                    }
                });
            });
    }, []);
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 my-5">
            <div className="bg-[#f2f2f2] py-6 rounded-lg flex justify-center items-center">
                <img
                    className="rounded-lg max-w-[80%] max-h-[500px]"
                    src={bookData?.image}
                    alt=""
                />
            </div>
            <div>
                <div className="border-b-2 border-dashed pb-2">
                    <h1 className="text-4xl font-bold">{bookData?.bookName}</h1>
                    <p className="mt-2 font-semibold">
                        Author: {bookData?.author}
                    </p>
                </div>
                <div className="py-2 md:py-4 border-b-2 border-dashed">
                    <p className="font-semibold">{bookData?.category}</p>
                </div>
                <div className="py-2 md:py-4 border-b-2 border-dashed">
                    <p>
                        <span className="font-bold">Review:</span>
                        {bookData?.review}
                    </p>
                    <div className="mt-2">
                        {bookData?.tags.map((tag) => (
                            <span className=" bg-[#23be0b10] text-[#22be0b] mx-1 py-1 px-2 rounded-2xl font-bold">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="py-2 md:py-4 border-b-2 border-dashed">
                    <p className="text-[#918f8f] font-semibold">
                        Number of Page:{" "}
                        <span className="text-[#22be0b]">
                            {bookData?.totalPages}
                        </span>
                    </p>
                    <p className="text-[#918f8f] font-semibold">
                        Publisher:{" "}
                        <span className="text-[#22be0b]">
                            {bookData?.publisher}
                        </span>
                    </p>
                    <p className="text-[#918f8f] font-semibold">
                        Year of publishing:{" "}
                        <span className="text-[#22be0b]">
                            {bookData?.yearOfPublishing}
                        </span>
                    </p>
                    <p className="text-[#918f8f] font-semibold">
                        Rating:{" "}
                        <span className="text-[#22be0b]">
                            {bookData?.rating}(out of 5)
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;
