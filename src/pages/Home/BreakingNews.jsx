import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className="flex bg-[#1111] p-4 mt-10">
            <button className="bg-red-600 text-white py-3 px-6 hover:bg-black flex"><span className="mr-2">Breking </span> <span> News</span></button>
            <Marquee pauseOnHover={true} speed={100} >
                <Link className="mr-10" to={'/'} >I can be a React component, multiple React components......</Link>
                <Link className="mr-10" to={'/'} >I can be a React component, multiple React components......</Link>
                <Link className="mr-10" to={'/'} >I can be a React component, multiple React components......</Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;