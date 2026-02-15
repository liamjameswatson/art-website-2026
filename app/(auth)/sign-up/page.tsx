"use client";

import Logo from "@/app/_components/Logo";
import Link from "next/link";
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);

  const passwordInputText = showPassword ? "text" : "password";
  const confirmPasswordInputText = showConfirmPassword ? "text" : "password";
  return (
    <div className="bg-light-grey-4 flex flex-center h-full">
      <div className="bg-gray-50 shadow-xl min-h-80 min-w-80 w-100 rounded-lg flex flex-col items-center justify-center gap-4 p-8">
        <div className="">
          <Logo />
        </div>

        <div className="flex flex-col gap-4 w-full">
          <h1>Sign Up</h1>
          <input type="text" className="form-input" placeholder="Name" />
          <input type="email" className="form-input" placeholder="Email" />
          <div className="relative">
            <input
              type={passwordInputText}
              className=" form-input"
              placeholder="Password"
            />
            <button
              className="absolute z-10 top-1/2 right-2 transform -translate-y-1/2"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <FiEyeOff className="text-black" />
              ) : (
                <FiEye className="text-black" />
              )}
            </button>
          </div>
          <div className="relative">
            <input
              type={confirmPasswordInputText}
              className=" form-input relative"
              placeholder="Confirm Password"
            />
            <button
              className="absolute z-10 top-1/2 right-2 transform -translate-y-1/2"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? (
                <FiEyeOff className="text-black" />
              ) : (
                <FiEye className="text-black" />
              )}
            </button>
          </div>
        </div>
        <button className="bg-light-primary-1 w-full rounded-full p-3 text-white text-lg shadow-md hover:bg-light-primary-2 transition-colors hover:cursor-pointer">
          Sign Up
        </button>
        <Link href="sign-in">
          Already have an account?{" "}
          <span className="text-blue-500 underline">Sign In</span>
        </Link>
      </div>
    </div>
  );
};

export default SignUpPage;
