import React, { FunctionComponent, ReactElement, useEffect, useRef, useState } from "react";

import BottomSheet from "src/components/BottomSheet";

import classNames from "src/functions/classNames";

import { filterStore } from "src/store/filter";
import { list, ListKeys, listKeys } from "src/data/list";

import { SheetRef } from "react-modal-sheet";

import style from "./index.module.scss";
import FilterSearch from "src/components/modals/filter/Search";
import { filterModalStore } from "src/store/filterModal";
import { useFirstRender } from "src/hooks/useFirstRender";

export default function FilterModal() {

  const SNAP_POINTS: Array<number> = [510, 160];

  const { activeCategories, setActiveCategories } = filterStore();
  const { opened, snap, position, setSnap, setPosition, closeModal } = filterModalStore();

  const filterRef = useRef<SheetRef>();
  const firstRender = useFirstRender();

  useEffect(() => {
    if (snap === null) {
      return;
    }

    filterRef.current?.snapTo(snap);
  }, [snap]);

  const handleCategoryClick = (key: ListKeys) => () =>  {
    const checkActive = activeCategories.includes(key);

    if (!checkActive) {
      setActiveCategories([...activeCategories, key]);
      return;
    }

    setActiveCategories(activeCategories.filter((item) => item !== key));
  };

  const onSnap = (index: number) => {
    // Костыль, так как автор Modal Sheet вызывает этот Cb постоянно, а не только на точках
    if (firstRender) {
      return;
    }

    setPosition(SNAP_POINTS[index]);
  };

  return (
    <BottomSheet
      className={style.filter}
      ref={filterRef}
      isOpen={opened}
      initialSnap={SNAP_POINTS.length - 1}
      snapPoints={SNAP_POINTS}
      tweenConfig={{ ease: 'easeOut', duration: 0.3 }}
      onCloseStart={() => setTimeout(() => setPosition(null))}
      onSnap={onSnap}
      onClose={closeModal}
    >
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
    </BottomSheet>
  );
}
