import Banner from "../Banner/Banner";
import Navbar from "../Navbar/Navbar";

const Header = () => {
    return (
        <div>
            <div style={{ background: "linear-gradient(rgba(255, 255, 255, 0.9), rgba(255,255,255,0.9)), url(/Resources/Clothing.png) no-repeat center /cover" }}>
                <Navbar></Navbar>
                <Banner></Banner>
            </div>
        </div>
    );
};

export default Header;