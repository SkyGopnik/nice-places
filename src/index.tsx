import React from 'react';
import ReactDOM from 'react-dom/client';
import { YMaps } from "@pbe/react-yandex-maps";

import App from './App';

import "./style/index.scss";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <YMaps>
      <App />
    </YMaps>
  </React.StrictMode>
);
