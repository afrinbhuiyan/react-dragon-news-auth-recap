import Header from "../shared/Header/Header";
import LeftSideNev from "../shared/LeftSideNav/LeftSideNev";
import Navber from "../shared/Navbar/Navber";
import RightSideNav from "../shared/RightSideNav/RightSideNav";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Navber></Navber>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div>
                    <LeftSideNev></LeftSideNev>
                </div>
                <div className="md:col-span-2">
                    <h2 className="text-2xl">Dragon News Home</h2>
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;