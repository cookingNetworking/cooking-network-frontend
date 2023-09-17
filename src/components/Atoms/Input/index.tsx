import { useState } from "react";
import "../../../app/globals.scss";

import {
  EyeIcon,
  EyeSlashIcon,
  ChevronUpIcon,
  LockClosedIcon,
  AtSymbolIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

type InputProps = {
  /**
   * Input 的項目名稱
   */
  title: string;
  type: "password" | "text" | "email";
  placeholderIcon: null | "password" | "email" | "user";
  isLabelInside: boolean;
  isActive: boolean;
  id: string;
  errorMsg: string | null;
};

const Input = ({
  title,
  id,
  type,
  placeholderIcon,
  isLabelInside,
  isActive,
  errorMsg,
}: InputProps) => {
  const [inputValue, setInputValue] = useState("");
  const [inputType, setInputType] = useState(type);
  const [inputError, setInputError] = useState(false);
  const handleInput = (e: any) => {
    const input = e.target.value;
    setInputValue(input);
    handleError(input);
  };
  const handleError = (input: string) => {
    if (type === "email") {
      setInputError(
        input.length > 0 &&
          !/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(input),
      );
    } else {
      setInputError(input.length > 0 && !/^[A-Za-z0-9]+$/.test(input));
    }
  };
  const isPassword = !!(inputType === "password");

  const CheckboxHandler = () => {
    isPassword ? setInputType("text") : setInputType("password");
  };
  const visibleIcon = isPassword ? (
    <EyeIcon className='h-5 w-5 text-lightGray' />
  ) : (
    <EyeSlashIcon className='h-5 w-5 text-lightGray' />
  );

  const inputIcon =
    placeholderIcon === "password" ? (
      <LockClosedIcon className='h-5 w-5 text-lightGray' />
    ) : placeholderIcon === "email" ? (
      <AtSymbolIcon className='h-5 w-5 text-lightGray' />
    ) : placeholderIcon === "user" ? (
      <UserCircleIcon className='h-5 w-5 text-lightGray' />
    ) : null;

  return (
    <div className="input-group" data-error={inputError}>
      <label htmlFor={title} className="label" data-label={isLabelInside}>
        {title}
      </label>
      <div className="inputBox" data-active={isActive}>
        <span className="inputIcon">{inputIcon}</span>
        <input
          className='input'
          name={title}
          type={inputType}
          id={id}
          value={inputValue}
          placeholder={title}
          onChange={(e) => handleInput(e)}
          required
        />
        {title === "Password" && (
          <button className='' onClick={CheckboxHandler}>
            {visibleIcon}
          </button>
        )}
        {inputError && <p className='error-text'>{errorMsg}</p>}
      </div>
    </div>
  );
};

export default Input;
