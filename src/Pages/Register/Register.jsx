import { NavLink, useNavigate } from "react-router-dom";
import reg from "../../assets/reg.json";
import Lottie from "lottie-react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import Container from "../../Components/Container/Container";
import useAuth from "../../hooks/useAuth";
import { saveUser } from "../../Utils/user";
import toast from "react-hot-toast";

const Register = () => {
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();
  const [regError, setRegError] = useState("");
  const { register, updateUser, logout } = useAuth();
  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const image = "https://i.ibb.co/bXNrHKD/userr.jpg";
    const email = form.email.value;

    const password = form.password.value;
    if (password.length < 6) {
      setRegError("Password must be at least 6 characters long");
      return;
    } else {
      setRegError("");
      try {
        const response = await register(email, password);
        await updateUser(name, image);
        const userName = response?.user?.displayName;
        const photoURL = response?.user?.photoURL;
        const userEmail = response?.user?.email;
        const userInfo = await saveUser(userEmail, userName, photoURL);
        toast.success("Successfully registered");
        console.log(userInfo);
        form.reset();
        navigate("/login");
        await logout();
      } catch (err) {
        console.log(err);
        toast.error(err.message);
      }
    }
  };

  return (
    <Container>
      <div className=" min-h-screen md:my-24 my-16">
        <div className="mb-12">
          <h3 className="md:text-3xl font-semibold lg:w-[50%] md:w-[80%] mx-auto text-center">
            Enroll now for personalized{" "}
            <span className="text-yellow-500">educational courses</span> and{" "}
            <span className="text-yellow-500">
              exclusive learning resources!
            </span>
          </h3>
        </div>
        <div className="hero  p-3">
          <div className="flex items-center flex-col md:flex-row lg:justify-around md:justify-between w-full h-full ">
            <div className=" lg:text-left lg:w-[30%] md:w-[44%] w-[70%]">
              <div className="lg:w-[400px] mb-10">
                <Lottie animationData={reg} loop={true}></Lottie>
              </div>
            </div>
            <div className="card shrink-0 mb-6 lg:w-[70%] w-full max-w-sm shadow-2xl border border-[#3E1B99C7] ">
              <form onSubmit={handleRegister} className="card-body w-full">
                <div className="text-center">
                  <h2 className="text-3xl font-bold pb-4 text-[#3E1B99C7]">
                    Create Account
                  </h2>
                </div>
                <div className="border-t border-[#3E1B99C7] border-dotted"></div>
                <div className="form-control pt-4">
                  <label className="label">
                    <span className="label-text text-[#3E1B99C7] font-semibold">
                      Full Name
                    </span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter Your Full Name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-[#3E1B99C7] font-semibold">
                      Email
                    </span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Your Email"
                    className="input input-bordered"
                    required
                  />
                </div>

                <div className="form-control relative">
                  <label className="label">
                    <span className="label-text text-[#3E1B99C7] font-semibold">
                      Password
                    </span>
                  </label>
                  <input
                    type={showPass ? "text" : "password"}
                    name="password"
                    placeholder="Enter Your Password"
                    className="input input-bordered"
                    required
                  />
                  <span
                    className="absolute left-[90%] top-[62%]"
                    onClick={() => setShowPass(!showPass)}
                  >
                    {showPass ? (
                      <FaEyeSlash className="cursor-pointer"></FaEyeSlash>
                    ) : (
                      <FaEye className="cursor-pointer"></FaEye>
                    )}
                  </span>
                </div>
                {regError && <p className="mt-1 text-red-600">{regError}</p>}

                <div className="form-control mt-6">
                  <button className="btn text-white bg-gradient-to-r from-[#3E1B99C7] to-[#3E1B99]">
                    Register
                  </button>
                </div>
                <div>
                  <p className="text-center">
                    Already Have an Account? please{" "}
                    <NavLink
                      className="text-red-600 link link-hover"
                      to="/login"
                    >
                      Login
                    </NavLink>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Register;
