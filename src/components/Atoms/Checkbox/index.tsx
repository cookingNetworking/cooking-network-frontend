import React, { useState } from "react";

import "../../../app/globals.scss";


type CheckboxProps = {
  /**
   * Checkbox 的項目名稱
   */
  title: string;
  /**
   * Checkbox 是否完成了
   */
  isDone: boolean;
  id: number;
  onClickAction: () => void;
};

export const Checkbox = ({
  title,
  isDone,
  id,
  onClickAction,
}: CheckboxProps) => {
  const [onDone, setOnDone] = useState<boolean>(isDone);
  const onClickHandler = () => {
    onClickAction();
    setOnDone((pre) => !pre);
  };
  return (
    <div
      className="checkbox"
      onClick={() => onClickHandler()}
      onChange={() => {}}
    >
      <input
        className="accent-primaryVar rounded"
        type="checkbox"
        id={`checkbox_${id}`}
        checked={onDone}
        onChange={() => {}}
      />
      <label className="" htmlFor="checkbox">
        {title}
      </label>
    </div>
  );
};

// text-primary focus:outline-none focus:ring-white
