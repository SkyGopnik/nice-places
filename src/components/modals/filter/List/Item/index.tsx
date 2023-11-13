import classNames from "src/functions/classNames";

import { DivProps } from "react-html-props";

import style from "./index.module.scss";

interface Props extends DivProps {
  name: string,
  category: string,
  till: string
}

export default function FilterListItem({ name, category, till, ...props }: Props) {
  return (
    <div
      className={classNames(
        style.item,
        props.className
      )}
      {...props}
    >
      <h3 className={style.item__title}>{name}</h3>
      <div className={style.item__info}>
        <p className={style.item__category}>{category}</p>
        <address className={style.item__openTill}>Open till {till}</address>
      </div>
    </div>
  );
}
