
"use client";
import Button from "../../components/Atoms/Button";

import IconButton from "../../components/Atoms/IconButton/index";
import Input from "../../components/Atoms/Input/index";
import SocialLogin from "../../components/Molecules/SocialLogin";
import { Checkbox } from "../../components/Atoms/Checkbox/index";
import React, { useState } from "react";

const Login = () => {
  const [rememberMe, setRememberMe] = useState(false);
  const CheckboxHandler = () => {
    setRememberMe((pre) => !pre); 
  };
  const onClickHandler = ( ) => {};

  return (
    <div className="app h-full w-full flex items-center justify-center bg-gradient-to-r from-primary to-secondaryVar">
    <div className="w-[400px] flex flex-col items-center justify-center px-12 py-8 gap-5 rounded-xl bg-white">
      <div className="title-area flex flex-col items-center justify-center py-7">
 <h2 className="opacity-60">Welcome Back to</h2>
      <h1 > Cooking Network</h1>
      </div>
     
      <SocialLogin isIconOnly={true} />
         <fieldset className="line-text mb-2">
        <legend>or continue with</legend>
      </fieldset>

            <Input
        title='Username'
        placeholderIcon='user'
        isLabelInside={false}
        isActive={true}
        id={"3"}
        type="text"
        errorMsg='*Please enter validate value'
      />
      <Input
        title='Password'
        placeholderIcon='password'
        isLabelInside={false}
        isActive={true}
        id={"4"}
        type="password"
        errorMsg='*Please enter validate value'
      />
      <div className="flex justify-between w-full">
        <Checkbox
          title='Remember me'
          isDone={rememberMe}
          id={2}
          onClickAction={CheckboxHandler}
        />
        <a href="http://" >
          Forget Password?
        </a>
      </div>
<div className="w-full mt-10">
 <Button
          title='login'
          role='primary'
        widthFull={true}

          isActive={true}
          id={3}
          outline={false}
          onClickHandler={onClickHandler}
        />
</div>
       
        

       <div className="">
              <p><a href="/signup">Sign up</a> if you don't have an account yet.</p>
 
            </div>
    </div>
    </div>
  );
};

export default Login;
