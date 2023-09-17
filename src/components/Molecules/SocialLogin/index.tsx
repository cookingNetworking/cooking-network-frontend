import IconButton from "../../Atoms/IconButton/index";

type SocialLoginProps = {
  isIconOnly: boolean;
};
const SocialLogin = ({ isIconOnly }: SocialLoginProps) => {
  const onClickHandler = () => {};
  return isIconOnly ? (
    <div className='flex flex-col items-center justify-center w-full'>
      {/* big btn (icon + title)*/}

      <div className="flex gap-2 flex-col pb-4 w-full items-center">
        {/* <IconButton
          title='facebook'
          isActive={true}
          isIconOnly={isIconOnly}
          id={"3"}
          onClickHandler={onClickHandler}
        /> */}
        <IconButton
          title='google'
          isActive={true}
          isIconOnly={isIconOnly}
          id={"login-google"}
          onClickHandler={onClickHandler}
        />
        {/* <IconButton
          title='github'
          isActive={true}
          isIconOnly={isIconOnly}
          id={"3"}
          onClickHandler={onClickHandler}
        /> */}
      </div>
    </div>
  ) : (
    <div className=' flex flex-col items-center justify-center  w-full'>
      {/* small btn (icon only)*/}

      <div className="flex gap-2 pb-4 ">
        <IconButton
          title='facebook'
          isActive={true}
          isIconOnly={isIconOnly}
          id={"3"}
          onClickHandler={onClickHandler}
        />
        <IconButton
          title='google'
          isActive={true}
          isIconOnly={isIconOnly}
          id={"3"}
          onClickHandler={onClickHandler}
        />
        <IconButton
          title='github'
          isActive={true}
          isIconOnly={isIconOnly}
          id={"3"}
          onClickHandler={onClickHandler}
        />
      </div>
    </div>
  );
};

export default SocialLogin;
