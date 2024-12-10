import { FaGoogle, FaGithub } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import instagram from '../../../assets/instagram.png';
import swimming from '../../../assets/swimming.png';
import classing from '../../../assets/class.png';
import playGround from '../../../assets/playground.png';

const RightSideNav = () => {
    return (
        <div>
            <div className="space-y-3 mb-5">
                <h2 className="text-2xl font-bold "> Login With </h2>
                <button className="btn btn-outline border-[#33a0ee] hover:bg-[#0e0f29cf]  w-full">
                    <FaGoogle className="text-[#33a0ee]" ></FaGoogle>
                    <span className="text-[#339fec] font-light" >Login With Google</span>
                </button>
                <button className="btn btn-outline w-full">
                    <FaGithub className="text-[15px]" ></FaGithub>
                    <span className="font-light" >Login With Github</span>
                </button>
            </div>
            <div className="mb-5">
                <h2 className="text-2xl mb-3 font-semibold"> Find Us On </h2>
                <a className="flex border p-3 rounded-t-md" href="">
                    <span className="bg-[#1111] p-3 rounded-full mr-4"><FaFacebookF className="text-[#3B599C]" ></FaFacebookF></span>
                    <span className="text-[#5f5e5e] font-medium my-auto text-lg " >FaceBook</span>
                </a>
                <a className="flex border-x p-3" href="">
                    <span className="bg-[#1111] p-3 rounded-full mr-4"><AiOutlineTwitter className="text-[#58A7DE]" ></AiOutlineTwitter></span>
                    <span className="text-[#5f5e5e] font-medium my-auto text-lg " >Twitter</span>
                </a>
                <a className="flex border p-3 rounded-b-md" href="">
                    <span className="bg-[#1111] p-3 rounded-full mr-4" ><img src={instagram} alt="" /></span>
                    <span className="text-[#5f5e5e] font-medium my-auto text-lg " >Instagram</span>
                </a>
            </div>
            <div className="p-4 mb-5 bg-[#1111] rounded-sm ">
                <h2 className="text-2xl mb-3 font-semibold"> Q-Zone </h2>
                <a href="">
                    <img className="my-5" src={swimming} alt="" />
                </a>
                <a className="" href="">
                    <img className="my-5" src={classing} alt="" />
                </a>
                <a className="" href="">
                    <img className="my-5" src={playGround} alt="" />
                </a>
            </div>
        </div>
    );
};

export default RightSideNav;