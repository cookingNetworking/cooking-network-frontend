import Button from "../../Atoms/Button/index";
import IconButton from "../../Atoms/IconButton/index";
import Input from "../../Atoms/Input/index";
import SocialLogin from "../../Molecules/SocialLogin";
import { Checkbox } from "../../Atoms/Checkbox/index";
import { useState } from "react";

const Login = () => {
  const [rememberMe, setRememberMe] = useState(false);
  const CheckboxHandler = () => {
    setRememberMe((pre) => !pre);
  };
  const onClickHandler = () => {};

  return (
    <div className="w-[400px] flex flex-col items-center justify-center px-12 py-8 gap-5 rounded-xl bg-white">
      <h1 className="py-4">Welcome Back!</h1>

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
        <a href="http://" className='hover:underline'>
          Forget Password?
        </a>
      </div>

      <fieldset className="line-text mb-2">
        <legend>or continue with</legend>
      </fieldset>
      <SocialLogin isIconOnly={false} />
      <div className="flex gap-2">
        <Button
          title='login'
          role='primary'
          isActive={true}
          id={3}
          outline={false}
          onClickHandler={onClickHandler}
        />
        <Button
          title='sign up'
          role='primary'
          isActive={true}
          id={3}
          outline={true}
          onClickHandler={onClickHandler}
        />
      </div>
    </div>
  );
};

export default Login;
