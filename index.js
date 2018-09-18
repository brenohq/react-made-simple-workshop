import React from "react";
import { render } from "react-dom";
import HomeScreen from './components/HomeScreen'

render(
  <HomeScreen message="Meu primeiro componente!" />,
  document.getElementById("root")
);
