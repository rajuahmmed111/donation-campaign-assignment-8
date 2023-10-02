import Banner from "../Banner/Banner";
import CardList from "../CardList/CardList";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CardList></CardList>
            <h2 className="text-3xl">This is home</h2>
        </div>
    );
};

export default Home;