import { Link, useLoaderData, useLocation, useNavigate } from "react-router-dom";
import Navber from "../shared/Navbar/Navber";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    console.log('location in the login page',location)

    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget)
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password)
        signIn(email, password)
        .then(result => {
            console.log(result.user)

            // Navigate after login
            navigate(location?.state ? location.state : '/');

        })
        .catch(error => {
            console.log(error)
        })
    }

    return (
        <div>
            <Navber></Navber>
            <div className="bg-[#1111] pt-80 -m-96 pb-36">
                <div className="md:w-3/4 lg:w-1/3 mx-auto bg-white mt-36 p-20 rounded-lg">
                <h1 className="text-2xl font-semibold text-center mb-10 pb-10 border-b">Login your account</h1>
                <form onSubmit={handleLogin} className="">
                    <div className="form-control">
                        <label className="label mb-2">
                            <span className="label-text font-semibold">Email address</span>
                        </label>
                        <input type="email" placeholder="email" name="email" className="input bg-[#1111] text-xs" required />
                    </div>
                    <div className="form-control mt-3">
                        <label className="label mb-2">
                            <span className="label-text font-semibold">Password</span>
                        </label>
                        <input type="password" placeholder="password" name="password" className="input bg-[#1111] text-xs" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-[#403F3F] text-white">Login</button>
                    </div>
                </form>
                <p className="text-center mt-4"><small>Dont’t Have An Account ?  
                <Link className="text-red-600 ml-1 font-semibold hover:underline " to={'/register'} >Register</Link> </small></p>
                </div>
            </div>
        </div>
    );
};

export default Login;