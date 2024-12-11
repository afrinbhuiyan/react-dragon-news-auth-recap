import Header from "../../shared/Header/Header";
import RightSideNav from "../../shared/RightSideNav/RightSideNav";
import Navber from "../../shared/Navbar/Navber";
import { useParams } from "react-router-dom";

const News = () => {
    const {id} = useParams()
    console.log(id)
    return (
        <div>
            <Header></Header>
            <Navber></Navber>
            <div className="grid grid-cols-4">
                <div className="col-span-3" >
                <h1 className="text-[20px] text-[#403F3F] font-semibold" >Dragon News</h1>
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default News;