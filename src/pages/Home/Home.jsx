import { useLoaderData } from "react-router-dom";
import Header from "../shared/Header/Header";
import LeftSideNev from "../shared/LeftSideNav/LeftSideNev";
import Navber from "../shared/Navbar/Navber";
import RightSideNav from "../shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import NewsCard from "./NewsCard";

const Home = () => {
    const news = useLoaderData([]);
    console.log(news)
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navber></Navber>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-20">
                <div>
                    <LeftSideNev></LeftSideNev>
                </div>
                {/* News container */}
                <div className="md:col-span-2">
                <h2 className="text-[20px] text-[#11111198] font-semibold mb-4" > Dragon News Home </h2>
                    {
                        news.map(aNews => <NewsCard
                        key={aNews._id}
                        news={aNews}
                        ></NewsCard> )
                    }
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;