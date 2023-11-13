import React, { useMemo } from "react";
import { Map as YandexMap, Placemark } from "@pbe/react-yandex-maps";
import { list, listKeys } from "src/data/list";
import { filterModalStore } from "src/store/filterModal";
import { filterStore } from "src/store/filter";

export default function Map() {

  const { activeCategories } = filterStore();
  const { setSnap } = filterModalStore();

  const minimizeFilter = () => setSnap(1);

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
      width={window.screen.width}
      height={window.screen.height}
      defaultState={{ center: [55.752591, 37.626813], zoom: 12 }}
      onMouseDown={minimizeFilter}
      onClick={minimizeFilter}
    >
      {placeMarks}
    </YandexMap>
  );
}
