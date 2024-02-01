import React, { useEffect, useState } from "react";
import { Auth } from "../../service/user.service";
import { useNavigate } from "react-router-dom";

const AdminPage = () => {
  const nav = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    const finder = localStorage.getItem("auth");
    if (finder) {
      nav("/dashboard");
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(formData);

    const data = await Auth("user", formData);
    //  console.log(data);
    if (data) {
      localStorage.setItem("auth", JSON.stringify(data));
      nav("/dashboard", { state: { data } });
    }
  };
  return (
    <div>
      <div className=" w-[50%] mx-auto bg-white  px-5 py-7  my-7">
        <form onSubmit={handleSubmit} action="" className="flex flex-col">
          <div className="flex flex-col my-7">
            <label htmlFor="email" className=" pb-2">
              Enter Your Email
            </label>
            <input
              onChange={(e) =>
                setFormData((pre) => ({ ...pre, email: e.target.value }))
              }
              value={formData.email}
              type="email"
              name="email"
              id="email"
              placeholder="example@gmail.com"
              className=" py-3 px-3 border "
              required
            />
          </div>
          <div className="flex flex-col pb-5">
            <input
              onChange={(e) =>
                setFormData((pre) => ({ ...pre, password: e.target.value }))
              }
              value={formData.password}
              type="password"
              name="password"
              id="password"
              className=" py-3 px-3 border"
              placeholder="Enter Your Password"
              required
            />
          </div>
          <button type="submit" className=" bg-red-300 px-3 py-2 ">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminPage;
