import React, { useMemo } from "react";
import { Map as YandexMap, Placemark } from "@pbe/react-yandex-maps";
import { list, listKeys } from "src/data/list";

export default function Map() {
  return (
    <YandexMap
      width={window.screen.width}
      height={window.screen.height}
      defaultState={{ center: [55.752591, 37.626813], zoom: 12 }}
      onClick={() => console.log('map click')}
    >
      {listKeys.map((key) => {
        const item = list[key];

        return item.locations.map((location) => (
          <Placemark
            key={location.coordinates.join("")}
            geometry={location.coordinates}
            options={{
              iconLayout: "default#image",
              iconImageHref: require(`./icons/dots/${key}.svg`),
              iconImageSize: [12, 12]
            }}
            onClick={() => console.log(key, location.name)}
          />
        ));
      })}
    </YandexMap>
  );
}
