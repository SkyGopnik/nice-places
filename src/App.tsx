import React, { useEffect, useState } from 'react';
import Map from "src/components/Map";
import FilterModal from "src/modals/Filter";

export default function App() {
  return (
    <div>
      <Map />
      <FilterModal />
    </div>
  );
}
