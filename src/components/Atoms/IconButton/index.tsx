import React from "react";
import "../../../app/globals.scss";

import facebook from "./facebook-logo.svg";
import google from "./google-logo.svg";
import github from "./github-logo.svg";

type IconButtonProps = {
  /**
   * IconButton 的項目名稱
   */
  title: "google" | "facebook" | "github" | null;
  isActive: boolean;
  id: string;
  isIconOnly: boolean;

  onClickHandler: (key: string) => void;
};

const IconButton = ({
  title,
  isActive,
  id,
  isIconOnly,
  onClickHandler,
}: IconButtonProps) => {
  const iconImg =
    title === "facebook"
      ? facebook
      : title === "google"
      ? google
      : title === "github"
      ? github
      : "";

  const style = isIconOnly
    ? "icon-btn w-full data-[active=false]:opacity-50  flex justify-center"
    : "icon-btn outline-none hover:outline-none hover:scale-[1.1] data-[active=false]:opacity-50 flex justify-center";

  return (
    <button
      className={style}
      id={`btn_${id}`}
      onClick={() => onClickHandler(id)}
      data-active={isActive}
    >
      <img
        src={iconImg}
        alt=""
        className='
     h-6 data-[size=false]:h-10'
        data-size={isIconOnly}
      />
      {isIconOnly && <h3>{`Login with ${title}`}</h3>}
    </button>
  );
};

export default IconButton;
