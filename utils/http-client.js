const BASE_URL = 'https://swapi.co/api/'

const handleApiErrors = (response) => {
  if (!response.ok) throw new Error(JSON.stringify(response));
  return response.json();
}

const requestConfig = {
  method: 'GET',
  headers: new Headers(),
  mode: 'cors'
}

export const GET = path => fetch(`${BASE_URL + path}`, requestConfig)
  .then(handleApiErrors)
  .then(json => json)
