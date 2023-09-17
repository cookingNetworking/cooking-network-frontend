import React from "react";
import "../../../app/globals.scss";

type ButtonProps = {
  /**
   * Button 的項目名稱
   */
  title: string;
  /**
   * Button 樣式/狀態
   */
  outline?: boolean;
  widthFull?: boolean;
  isActive: boolean;
  id: number;
  /**
   * Button 顏色/層級
   */
  role: "primary" | "secondary" | "highlight";
  onClickHandler: (key: number) => void;
};
// onClickHandler
const Button = ({
  title,
  outline,
  widthFull,
  isActive,
  id,
  role,
  onClickHandler,
}: ButtonProps) => {
  const roleVariants = {
    primary: `bg-primary text-white hover:bg-primaryVar active:bg-primaryD`,
    secondary:
      "bg-secondary text-white hover:bg-secondaryVar active:bg-secondaryD",
    highlight:
      "bg-highlight text-white hover:bg-highlightVar active:bg-highlightD",
  };
  const outlineVariants = {
    primary:
      "outline outline-1 outline-primary text-primary hover:text-white hover:bg-primary hover:opacity-60 active:bg-primaryD",
    secondary:
      "outline outline-1 outline-secondary text-secondary hover:bg-secondary hover:opacity-60 hover:text-white active:bg-secondaryD",
    highlight:
      "outline outline-1 outline-highlight text-highlight hover:text-white hover:bg-highlight hover:opacity-60 active:bg-highlightD",
  };
  // const roleVariants = {
  //   primary: 'btn-primary',
  //   secondary: 'btn-secondary',
  //   highlight: 'btn-highlight',
  // }
  // const outlineVariants = {
  //   primary: 'btn-primary-outline',
  //   secondary: 'btn-secondary-outline',
  //   highlight: 'btn-highlight-outline',
  // }

  return (
    <button
      className={`btn ${outline ? outlineVariants[role] : roleVariants[role]} ${widthFull ? 'w-full' : ''}`}
      id={`btn_${id}`}
      onClick={() => onClickHandler(id)}
      data-active={isActive}
    >
      {title}
    </button>
  );
};

export default Button;
