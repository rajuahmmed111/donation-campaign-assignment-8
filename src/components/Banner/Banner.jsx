
const Banner = () => {

    const [searchValue, setSearchValue] = ([])

    const handleSearch = (value) => {
        const isExist = searchValue.filter(item => item.id == value.id)
        setSearchValue(isExist);
    }
        


    return (
        <div className="mt-28" >
            <h2 className='text-4xl font-bold text-center'>I Grow By Helping People In Need</h2>
            <div className="w-[410px] h-[150px] lg:ml-96 mt-8 ml-20">
                <input className="border-2 w-80 h-12 p-3" type="search" placeholder="Search here..." />
                <button onSubmit={() => handleSearch(searchValue)} className="btn btn-error">Search</button>
            </div>
        </div>
    );
};

export default Banner;