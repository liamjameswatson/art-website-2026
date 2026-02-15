"use client";

import Logo from "@/app/_components/common/Logo";
import Link from "next/link";
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

const SignInPage = () => {
  const [showPassword, setShowPassword] = useState(true);
  const passwordInputText = showPassword ? "text" : "password";
  return (
    <div className="bg-light-grey-4 flex flex-center h-full">
      <div className="bg-gray-50 shadow-xl min-h-80 min-w-80 w-100 rounded-lg flex flex-col items-center justify-center gap-4 p-8">
        <div className="">
          <Logo />
        </div>

        <div className="flex flex-col gap-4 w-full">
          <h1>Sign In</h1>
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
        </div>
        <button className="bg-light-primary-1 w-full rounded-full p-3 text-white text-lg shadow-md hover:bg-light-primary-2 transition-colors hover:cursor-pointer">
          Sign In
        </button>
        <Link href="sign-up">
          Don&apos;t have an account?{" "}
          <span className="text-blue-500 underline">Sign Up</span>
        </Link>
      </div>
    </div>
  );
};

export default SignInPage;
