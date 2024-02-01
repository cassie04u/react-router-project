import React, { useState } from "react";
import { api } from "../../service/baseurl";
import { Link, useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  // const isValid = () => {
  //   console.log(isValid());
  //   const isProceed = true;
  //   const errormessage = "Please fill the value in";
  //   if (id === null || id === "") {
  //     isProceed = false;
  //     errormessage += "Username";
  //   }
  //   if (!isProceed) {
  //     window.alert(errormessage);
  //   }
  //   return isProceed;
  // };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();

    const register = { email, password };
    // console.log(register);

    const res = await api
      .post("user", JSON.stringify(register))
      .then((res) => {
        window.alert("Registered Successfully");
        nav("/dashboard", {state : {register}});
      })
      .catch((err) => {
        window.alert("Failed :" + err.message);
      });
  };
  return (
    <div>
      <div className=" w-[50%] mx-auto bg-white shadow-lg  px-5 py-7  my-7">
        <form onSubmit={handleRegisterSubmit} className="flex flex-col">
          <div className="flex flex-col ">
            <label htmlFor="email" className=" pb-2">
              Your Name
            </label>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              name="name"
              id="id"
              className=" py-3 px-3 border "
              required
            />
          </div>
          <div className="flex flex-col my-7">
            <label htmlFor="email" className=" pb-2">
              Your Email
            </label>
            <input
              // onChange={(e) =>
              //   setFormData((pre) => ({ ...pre, email: e.target.value }))
              // }
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              name="email"
              id="email"
              placeholder="example@gmail.com"
              className=" py-3 px-3 border "
              required
            />
          </div>
          <div className="flex flex-col pb-5">
            <label htmlFor="email" className=" pb-2">
              Your Password
            </label>
            <input
              // onChange={(e) =>
              //   setFormData((pre) => ({ ...pre, email: e.target.value }))
              // }
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              name="password"
              id="password"
              className=" py-3 px-3 border"
              placeholder="Enter Your Password"
              required
            />
          </div>
          <button
            type="submit"
            className=" bg-red-300 px-3 py-2 hover:bg-red-400 hover:text-white duration-200"
          >
            Register
          </button>
          <Link
            to={"/admin"}
            className=" text-neutral-600 group font-semibold text-center  capitalize"
          >
            {" "}
            Already have an account?
            <span className="underline group-hover:hover:text-neutral-700">
              Login here
            </span>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
