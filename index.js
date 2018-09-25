import React from "react";
import { render } from "react-dom";
import styled from "styled-components";

// Criando uma tag <h1> estilizada
const Greeting = styled.h1`
  text-align: center;
  color: blue;
`;

// Criando um wrapper que exibe o nome passado para o Greeting criado acima
const Hello = ({ name }) => <Greeting>{name}</Greeting>;

// Vinculando o componente Hello com a o nó de id = root (olha lá no index.hml)
render(
  <Hello name="Meu primeiro componente!" />,
  document.getElementById("root")
);
