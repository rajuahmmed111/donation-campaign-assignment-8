
const Banner = () => {
    return (
        <div className="mt-28">
            <h2 className='text-4xl font-bold text-center'>I Grow By Helping People In Need</h2>
            <div className="border-2 w-[410px] h-[52px] lg:ml-96 mt-8 ml-20">
                <input className="w-80 h-12" type="search" placeholder="search here..."/>
                <button className="btn btn-error">Search</button>
            </div>
        </div>
    );
};

export default Banner;