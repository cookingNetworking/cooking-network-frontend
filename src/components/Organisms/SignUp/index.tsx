import Button from "../../Atoms/Button/index";
import Input from "../../Atoms/Input/index";
import SocialLogin from "../../Molecules/SocialLogin";

const SignUp = () => {
  const onClickHandler = () => {};

  return (
    <div className="w-[400px] flex flex-col items-center justify-center px-12 py-8 gap-5 rounded-xl bg-white">
      <h1 className="py-4 text-center">Create your account</h1>
      <SocialLogin isIconOnly={true} />

      <fieldset className="line-text mb-3">
        <legend>or</legend>
      </fieldset>

      <Input
        title='Username'
        placeholderIcon='user'
        isLabelInside={true}
        isActive={true}
        id={"3"}
        type="text"
        errorMsg='*Please enter a valid value'
      />
      <Input
        title='Email'
        placeholderIcon='email'
        isLabelInside={true}
        isActive={true}
        id={"4"}
        type="email"
        errorMsg='*Please enter a valid value'
      />
      <Input
        title='Password'
        placeholderIcon='password'
        isLabelInside={true}
        isActive={true}
        id={"4"}
        type="password"
        errorMsg='*Please enter a valid value'
      />

      <div className="flex justify-center w-full">
        <p>
          Already have account?{" "}
          <a href="http://" className='hover:underline'>
            Login
          </a>
        </p>
      </div>

      <Button
        title='Sign up'
        role='primary'
        isActive={true}
        id={3}
        outline={false}
        onClickHandler={onClickHandler}
      />
    </div>
  );
};

export default SignUp;
