import Lottie from "lottie-react";
import log from "../../assets/log.json";
import { NavLink, useNavigate } from "react-router-dom";

import { Typewriter } from "react-simple-typewriter";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Container from "../../Components/Container/Container";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();
  const handleLogin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    try {
      await login(email, password);
      navigate("/");
      toast.success("Successfully login");
    } catch (err) {
      toast.error(err.message);
    }
  };
  return (
    <Container>
      <div className=" min-h-screen md:my-24 my-16">
        <div className="text-center text-xl md:text-2xl xl:text-4xl mb-8 ">
          <h1
            style={{
              paddingTop: "1rem",
              margin: "auto 0",
              fontWeight: "normal",
            }}
          >
            Log in to{" "}
            <span style={{ color: "#eab308", fontWeight: "bold" }}>
              <Typewriter
                words={["Explore", "Discover", "Customize", "Organize!"]}
                loop={5}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h1>
        </div>
        <div className="flex justify-between items-center flex-col md:flex-row ">
          <div className="lg:w-[40%] md:w-[50%] w-[70%] ">
            <div className="w-full ">
              <Lottie animationData={log} loop={true}></Lottie>
            </div>
          </div>

          <div className="hero  lg:w-[50%] md:w-[50%] w-full flex justify-center ">
            <div className="hero-content flex flex-col md:flex-row-reverse ">
              <div className="text-center lg:text-left md:w-[50%] w-[80%] lg:w-full"></div>
              <div className="card shrink-0 lg:w-[600px] border border-[#3E1B99C7] max-w-sm shadow-2xl">
                <form onSubmit={handleLogin} className="card-body">
                  <div>
                    <p className="text-[#3E1B99C7] font-semibold text-3xl pb-4 text-center">
                      Please Login
                    </p>
                  </div>
                  <div className="border-t border-[#3E1B99C7] border-dotted"></div>
                  <div className="form-control pt-4">
                    <label className="label">
                      <span className="label-text text-green-900 font-semibold">
                        Email
                      </span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter Email"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control relative">
                    <label className="label">
                      <span className="label-text text-green-900 font-semibold">
                        Password
                      </span>
                    </label>

                    <input
                      type={showPass ? "text" : "password"}
                      name="password"
                      placeholder="Enter Password"
                      className="input input-bordered"
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

                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                  <div className="form-control mt-3">
                    <button className="btn text-white bg-gradient-to-r from-[#3E1B99C7] to-[#3E1B99]">
                      Login
                    </button>
                  </div>

                  <div className="mt-4">
                    <p className="text-center">
                      Do Not Have any Account?{" "}
                      <NavLink
                        className="link link-hover text-red-600"
                        to="/register"
                      >
                        Register
                      </NavLink>{" "}
                    </p>
                  </div>
                  <div className="flex mt-3 justify-between">
                    <div className="w-[30%] ">
                      <h3 className="border-t border-[#3E1B99C7] mt-3"></h3>
                    </div>
                    <div className="text-center">
                      <p className="font-bold text-[#3E1B99C7]">
                        Continue with us
                      </p>
                    </div>
                    <div className="w-[30%]">
                      <h3 className="border-t border-[#3E1B99C7] mt-3"></h3>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Login;
