import classNames from "src/functions/classNames";

import SearchIcon from "./icons/search.svg";

import { InputProps } from "react-html-props";

import style from "./index.module.scss";

export interface SearchProps extends InputProps {}

export default function FilterSearch({ className, ...props }: SearchProps) {
  return (
    <label
      className={classNames(
        style.search,
        className
      )}
    >
      <img src={SearchIcon} alt="search icon" />
      <input {...props} />
    </label>
  );
}
