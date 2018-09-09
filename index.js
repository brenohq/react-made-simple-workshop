import React from "react";
import { render } from "react-dom";
import styled from "styled-components";

const Greeting = styled.h1`
  text-align: center;
  color: blue;
`;

const Hello = ({ name }) => <Greeting>{name}</Greeting>;

render(
  <Hello name="Meu primeiro componente!" />,
  document.getElementById("root")
);
