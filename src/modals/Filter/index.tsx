import React from "react";

import FilterSearch from "src/components/modals/filter/Search";
import FilterList from "src/components/modals/filter/List";
import Modal from "src/components/Modal";

import { filterStore } from "src/store/filter";
import { modalStore } from "src/store/modal";

import classNames from "src/functions/classNames";

import { list, ListKeys, listKeys } from "src/data/list";

import style from "./index.module.scss";

export default function FilterModal() {

  const { activeModal, height, setSnap, closeModal } = modalStore();
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
        <div className={style.filter__search}>
          <FilterSearch
            type="text"
            placeholder="search for nice places..."
            onClick={() => setSnap(0)}
          />
          {height && (height > 160) && (
            <button
              className={style.filter__searchCancel}
              onClick={closeModal}
            >
              Cancel
            </button>
          )}
        </div>
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
        <FilterList
          className={style.filter__list}
          list={list["bars"].locations}
        />
      </div>
    </Modal>
  );
}
