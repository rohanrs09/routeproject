import React from "react";
import { useState } from "react";
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    conformPassword: "",
  });

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      {/* student-Instructor -form */}
      <div>
        <button>Student</button>
        <button>Instructor</button>
      </div>
      <form>
        {/* firstname and lastname */}
        <div>
          <label>
            <p>
              First Name<sup>*</sup>
            </p>
            <input
              required
              type="text"
              name="firstname"
              onChange={changeHandler}
              placeholder="Enter First Name"
              value={formData.firstName}
            />
          </label>

          <label>
            <p>
              Last Name<sup>*</sup>
            </p>
            <input
              required
              type="text"
              name="lastname"
              onChange={changeHandler}
              placeholder="Enter Last Name"
              value={formData.lastName}
            />
          </label>
        </div>
        {/* Email address */}
        <label>
          <p>
            Email Address<sup>*</sup>
          </p>
          <input
            required
            type="email"
            name="email"
            onChange={changeHandler}
            placeholder="Enter Email Address"
            value={formData.email}
          />
        </label>
        {/* createPassword and conformPasswords */}
        <div>
          <label>
            <p>
              Create Password<sup>*</sup>
            </p>
            <input
              required
              type={showPassword ? "text" : "password"}
              name="Password"
              onChange={changeHandler}
              placeholder="Enter Password"
              value={formData.password}
            />
            <span onClick={() => setShowPassword((prev) => !prev)}>
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </label>
          <label>
            <p>
              Confirm Password<sup>*</sup>
            </p>
            <input
              required
              type={showPassword ? "text" : "password"}
              name="confirmPassword"
              onChange={changeHandler}
              placeholder="Confirm Password"
              value={formData.confirmPassword}
            />
            <span onClick={() => setShowPassword((prev) => !prev)}>
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </label>

        </div>
        <button>
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
