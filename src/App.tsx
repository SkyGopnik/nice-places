import React from 'react';

import Map from "src/components/Map";
import FloatButtons from "src/components/FloatButtons";

import FilterModal from "src/modals/Filter";
import ItemModal from "src/modals/Item";

export default function App() {
  return (
    <>
      <Map />
      <FloatButtons />

      <FilterModal />
      <ItemModal />
    </>
  );
}
