const BASE_URL = 'https://swapi.co/api/'

// Função que lida caso haja erros na chamada
const handleApiErrors = (response) => {
  if (!response.ok) throw new Error(JSON.stringify(response));
  return response.json();
}

// Criando objeto de configuração do cliente HTTP
const requestConfig = {
  method: 'GET',
  headers: new Headers(),
  mode: 'cors'
}

// Função que faz um GET no path passado como argumento
export const GET = path => fetch(`${BASE_URL + path}`, requestConfig)
  .then(handleApiErrors)
  .then(json => json)
