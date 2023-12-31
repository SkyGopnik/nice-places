import React from "react";

import ListItem from "./Item";

import { mapStore } from "src/store/map";
import { modalStore } from "src/store/modal";
import { filterStore } from "src/store/filter";

import classNames from "src/functions/classNames";

import { LocationItem } from "src/data/list";
import { DivProps } from "react-html-props";

import style from "./index.module.scss";

interface Props extends DivProps {
  list: Array<LocationItem>
}

export default function FilterList({ list, ...props }: Props) {

  const { openModal } = modalStore();
  const { setActiveItem } = filterStore();
  const { setState } = mapStore();

  const openLocation = (item: LocationItem) => () => {
    openModal("ITEM");
    setActiveItem(item);
    setState({
      center: item.coordinates,
      zoom: 15
    });
  };

  return (
    <div
      className={classNames(
        style.list,
        props.className
      )}
    >
      {list.length !== 0 ? (
        list.map((item, index) => (
          <ListItem
            key={item.name + item.category}
            name={item.name}
            category={item.category}
            till={`1${index}:00PM`}
            onClick={openLocation(item)}
          />
        ))
      ) : (
        <p className={style.list__placeholder}>Nothing found</p>
      )}
    </div>
  );
}
