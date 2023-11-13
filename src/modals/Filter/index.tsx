import React, { FunctionComponent, ReactElement, useRef, useState } from "react";

import BottomSheet from "src/components/BottomSheet";

import classNames from "src/functions/classNames";

import { filterStore } from "src/store/filter";
import { list, ListKeys, listKeys } from "src/data/list";

import { SheetRef } from "react-modal-sheet";

import style from "./index.module.scss";
import FilterSearch from "src/components/modals/filter/Search";

export default function FilterModal() {

  const { activeCategories, setActiveCategories } = filterStore();

  const [open, setOpen] = useState(true);

  const filterRef = useRef<SheetRef>();

  const handleCategoryClick = (key: ListKeys) => () =>  {
    const checkActive = activeCategories.includes(key);

    if (!checkActive) {
      setActiveCategories([...activeCategories, key]);
      return;
    }

    setActiveCategories(activeCategories.filter((item) => item !== key));
  };

  return (
    <>
      <button onClick={() => setOpen(true)}>Open</button>
      <BottomSheet
        className={style.filter}
        ref={filterRef}
        isOpen={open}
        initialSnap={1}
        snapPoints={[510, 160]}
        onClose={() => setOpen(false)}
      >
        <FilterSearch
          className={style.filter__search}
          type="text"
          placeholder="search for nice places..."
          onClick={() => filterRef.current?.snapTo(0)}
        />
        <div className={style.filter__categories}>
          {listKeys.map((key) => {
            const item = list[key];

            const imageHref = require(`./icons/${key}.svg`);
            const imageAlt = `${key} icon`;

            return (
              <div
                className={classNames(
                  style.categories__item,
                  activeCategories.includes(key) && style.categories__itemActive
                )}
                key={key}
                onClick={handleCategoryClick(key)}
              >
                <div className={style.categories__itemImage}>
                  <img
                    src={imageHref}
                    alt={imageAlt}
                  />
                </div>
                <p className={style.categories__itemCaption}>
                  {item.name}
                </p>
              </div>
            );
          })}
        </div>
      </BottomSheet>
    </>
  );
}
