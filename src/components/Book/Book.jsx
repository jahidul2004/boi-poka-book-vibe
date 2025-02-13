import { Link } from "react-router-dom";

const Book = ({ book }) => {
    return (
        <div className="card w-full shadow-lg p-4 m-auto">
            <figure className="bg-[#f2f2f2] py-6 rounded-lg">
                <img className="h-[200px]" src={book?.image} />
            </figure>
            <div className="card-body">
                <p>
                    {book?.tags.map((tag) => (
                        <span className=" bg-[#23be0b10] text-[#22be0b] mx-1 py-1 px-2 rounded-2xl font-bold">
                            {tag}
                        </span>
                    ))}
                </p>
                <h2 className="card-title text-2xl font-bold">
                    {book?.bookName}
                </h2>
                <p className="font-semibold">By: {book?.author}</p>
                <div className="border-t-2 border-dashed flex justify-between w-full p-2 text-md font-semibold">
                    <div>
                        <p>{book?.category}</p>
                    </div>
                    <div>
                        <p>
                            {book?.rating}{" "}
                            <i className="fa-regular fa-star"></i>
                        </p>
                    </div>
                </div>
                <Link
                    to={`book/${book?.bookId}`}
                    className="btn bg-[#25bb13] text-white w-max"
                >
                    See Details
                </Link>
            </div>
        </div>
    );
};

export default Book;
