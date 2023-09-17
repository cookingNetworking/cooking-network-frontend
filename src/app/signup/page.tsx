
"use client";
import Button from "../../components/Atoms/Button";

import Input from "../../components/Atoms/Input/index";
import SocialLogin from "../../components/Molecules/SocialLogin";

import React, { useState } from "react";

const SignUp = () => {
  const onClickHandler = () => {};

  return (
        <div className="app h-full w-full flex items-center justify-center bg-gradient-to-r from-primary to-secondaryVar">    <div className="w-[400px] flex flex-col items-center justify-center px-12 py-8 gap-5 rounded-xl bg-white">
      <h1 className="py-4 text-center">Create your account</h1>
      <SocialLogin isIconOnly={true} />

      <fieldset className="line-text mb-3">
        <legend>or</legend>
      </fieldset>

      <Input
        title='Username'
        placeholderIcon='user'
        isLabelInside={false}
        isActive={true}
        id={"3"}
        type="text"
        errorMsg='*Please enter a valid value'
      />
      <Input
        title='Email'
        placeholderIcon='email'
        isLabelInside={false}
        isActive={true}
        id={"4"}
        type="email"
        errorMsg='*Please enter a valid value'
      />
      <Input
        title='Password'
        placeholderIcon='password'
        isLabelInside={false}
        isActive={true}
        id={"4"}
        type="password"
        errorMsg='*Please enter a valid value'
      />

      <div className="flex flex-col gap-3 items-center justify-center w-full pt-10">
        


      <Button

        title='Sign up'
        role='primary'
        widthFull={true}
        isActive={true}
        id={3}
        outline={false}
        onClickHandler={onClickHandler}
      />
      <p>
          Already have account?
          <a href="/login" className='hover:underline underline-offset-2 ml-1'> 
             Login
          </a>
        </p>
      </div>

    </div>
    </div>

  );
};

export default SignUp;
