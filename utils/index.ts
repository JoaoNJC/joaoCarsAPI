export async function fetchCars() {
  const headers = {
    'X-RapidAPI-Key': '3b99c07193msh6bf1e8e5bf9a49bp1fc01djsn4d3ced88145e',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
  }

  const response = await fetch(
    'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
    headers: headers
  });

  const result = await response.json();

  return result;
}