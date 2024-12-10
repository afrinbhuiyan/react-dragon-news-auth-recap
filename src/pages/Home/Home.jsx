import Header from "../shared/Header/Header";
import Navber from "../shared/Navbar/Navber";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Navber></Navber>
            <h2 className="text-4xl font-poppins font-bold">This is home</h2>
        </div>
    );
};

export default Home;