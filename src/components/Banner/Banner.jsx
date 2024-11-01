import bannerImg from '../../assets/books.jpg';

const Banner = () => {
    return (
        <div className="hero bg-base-200 h-max py-5 md:py-20 rounded-lg mb-5">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src={bannerImg}
                    className="rounded-lg shadow-2xl"
                />
                <div className='w-full'>
                    <h1 className="text-3xl md:text-5xl font-bold mb-6">Books to freshen up <br /> your bookshelf</h1>
                    <button className="btn bg-[#22be0b] text-white">View The List</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
