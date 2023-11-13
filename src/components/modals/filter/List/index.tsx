import React from "react";

import ListItem from "./Item";

import classNames from "src/functions/classNames";

import { LocationItem } from "src/data/list";
import { DivProps } from "react-html-props";

import style from "./index.module.scss";

interface Props extends DivProps {
  list: Array<LocationItem>
}

export default function FilterList({ list, ...props }: Props) {
  return (
    <div
      className={classNames(
        style.list,
        props.className
      )}
    >
      {list.map((item, index) => (
        <ListItem
          key={item.name + item.category}
          name={item.name}
          category={item.category}
          till={`1${index}:00PM`}
        />
      ))}
    </div>
  );
}
