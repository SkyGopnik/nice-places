import React from 'react';
import Map from "src/components/Map";
import FilterModal from "src/modals/Filter";
import FloatButtons from "src/components/FloatButtons";

export default function App() {
  return (
    <>
      <Map />
      <FloatButtons />

      <FilterModal />
    </>
  );
}
