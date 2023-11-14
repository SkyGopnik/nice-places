import React, { useEffect, useMemo, useState } from "react";
import { Map as YandexMap, Placemark } from "@pbe/react-yandex-maps";

import { modalStore } from "src/store/modal";
import { filterStore } from "src/store/filter";
import { mapStore } from "src/store/map";

import arraysEqual from "src/functions/arrayEqual";

import { list, listKeys, LocationItem } from "src/data/list";

export default function Map() {

  const { activeModal, openModal, setSnap } = modalStore();
  const { state, setState } = mapStore();
  const { activeCategories, activeItem, setActiveItem } = filterStore();

  const [size, setSize] = useState({
    width: window.screen.width,
    height: window.screen.height
  });

  const minimizeFilter = () => {
    if (activeModal === "FILTER") {
      setSnap(1);
      return;
    }

    if (activeModal === "ITEM") {
      setSnap(2);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleResize = () => {
    setSize({
      width: window.screen.width,
      height: window.screen.height
    });
  };

  const openLocation = (item: LocationItem) => () => {
    openModal("ITEM");
    setActiveItem(item);
    setState({
      center: item.coordinates,
      zoom: 15
    });
  };

  const placeMarks = useMemo(() => listKeys.map((key) => {
    const item = list[key];

    if (!activeCategories.includes(key)) {
      return null;
    }

    return item.locations.map((location) => (
      <Placemark
        key={key + location.name}
        geometry={location.coordinates}
        options={
          // Поиск просто по координатам, если бы данные были от бэка, было бы по ID
          activeItem && arraysEqual(location.coordinates, activeItem.coordinates) ? {
            iconLayout: "default#image",
            iconImageHref: require(`./icons/markers/${key}.svg`),
            iconImageSize: [31, 45]
          } : {
            iconLayout: "default#image",
            iconImageHref: require(`./icons/dots/${key}.svg`),
            iconImageSize: [12, 12]
          }
        }
        onClick={openLocation(location)}
      />
    ));
  }), [activeCategories, activeItem]);

  return (
    <YandexMap
      width={size.width}
      height={size.height}
      state={state}
      onMouseDown={minimizeFilter}
      onClick={minimizeFilter}
    >
      {placeMarks}
    </YandexMap>
  );
}
