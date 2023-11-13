import React from "react";

import FilterSearch from "src/components/modals/filter/Search";
import Modal from "src/components/Modal";

import { filterStore } from "src/store/filter";
import { modalStore } from "src/store/modal";

import classNames from "src/functions/classNames";

import { list, ListKeys, listKeys } from "src/data/list";

import style from "./index.module.scss";

export default function FilterModal() {

  const { activeModal, setSnap } = modalStore();
  const { activeCategories, setActiveCategories } = filterStore();

  const handleCategoryClick = (key: ListKeys) => () =>  {
    const checkActive = activeCategories.includes(key);

    if (!checkActive) {
      setActiveCategories([...activeCategories, key]);
      return;
    }

    setActiveCategories(activeCategories.filter((item) => item !== key));
  };

  return (
    <Modal snapPoints={[510, 160]} opened={activeModal === "FILTER"}>
      <div className={style.filter}>
        <FilterSearch
          className={style.filter__search}
          type="text"
          placeholder="search for nice places..."
          onClick={() => setSnap(0)}
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
      </div>
    </Modal>
  );
}
