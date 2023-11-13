import React, { useEffect, useMemo, useState } from "react";
import { Map as YandexMap, Placemark } from "@pbe/react-yandex-maps";

import { modalStore } from "src/store/modal";
import { filterStore } from "src/store/filter";

import { list, listKeys } from "src/data/list";
import { mapStore } from "src/store/map";

export default function Map() {

  const { activeCategories } = filterStore();
  const { state } = mapStore();
  const { setSnap } = modalStore();

  const [size, setSize] = useState({
    width: window.screen.width,
    height: window.screen.height
  });

  const minimizeFilter = () => setSnap(1);

  // useEffect(() => {
  //   setTimeout(() => setState({
  //   //   center: [55.763746, 37.691800],
  //   //   zoom: 15
  //   // }), 2000);
  // }, []);

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

  const placeMarks = useMemo(() => listKeys.map((key) => {
    const item = list[key];

    if (!activeCategories.includes(key)) {
      return null;
    }

    return item.locations.map((location) => (
      <Placemark
        key={key + location.name}
        geometry={location.coordinates}
        options={{
          iconLayout: "default#image",
          iconImageHref: require(`./icons/dots/${key}.svg`),
          iconImageSize: [12, 12]
        }}
        onClick={() => console.log(key, location.name)}
      />
    ));
  }), [activeCategories]);

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
