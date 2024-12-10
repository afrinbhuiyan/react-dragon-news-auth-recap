import { Link } from "react-router-dom";
import Navber from "../shared/Navbar/Navber";

const Register = () => {

    const handleRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget)
        console.log(form.get('password'))
    }

    return (
        <div>
            <Navber></Navber>
            <div className="bg-[#1111] pt-96 -m-96 pb-80">
                <div className="md:w-3/4 lg:w-1/3 mx-auto bg-white mt-36 p-20">
                    <h1 className="text-2xl font-semibold text-center mb-10">Register your account</h1>
                    <form onSubmit={handleRegister} className="">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" placeholder="Photo URL" name="photo" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#200d0dde] text-white">Register</button>
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