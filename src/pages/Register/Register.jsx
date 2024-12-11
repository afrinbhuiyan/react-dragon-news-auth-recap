import { Link } from "react-router-dom";
import Navber from "../shared/Navbar/Navber";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {
    const { createUser } = useContext(AuthContext)

    const handleRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget)
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, photo, email, password);

        // create user
        createUser(email, password)
        .then(result => {
            console.log(result.user)
        })
        .catch(error => {
            console.log(error)
        })
    }

    return (
        <div>
            <Navber></Navber>
            <div className="bg-[#1111] pt-[300px] -m-96 pb-20">
                <div className="md:w-3/4 lg:w-1/3 mx-auto bg-white mt-36 p-20 rounded-lg">
                    <h1 className="text-2xl font-semibold text-center mb-10">Register your account</h1>
                    <form onSubmit={handleRegister} className="">
                        <div className="form-control mb-3">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input type="text" placeholder="Enter your name" name="name" className="input bg-[#1111] text-xs" required />
                        </div>
                        <div className="form-control mb-3">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" placeholder="Enter your Photo URL" name="photo" className="input bg-[#1111] text-xs " required />
                        </div>
                        <div className="form-control mb-3">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Enter your email address" name="email" className="input bg-[#1111] text-xs" required />
                        </div>
                        <div className="form-control mb-3">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Enter your password" name="password" className="input bg-[#1111] text-xs" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#403F3F] text-white">Register</button>
                        </div>
                    </form>
                    <p className="text-center mt-4"><small> Already Have An Account ?
                        <Link className="text-red-600 ml-1 font-semibold hover:underline " to={'/login'} >Login</Link> </small></p>
                </div>
            </div>
        </div>
    );
};

export default Register;