export const getCountry = async (city: string) => {
  
    const geoResponse = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${city}`
    );
  
    const geoData = await geoResponse.json();

    if (!geoData.results) return null;

    const country = geoData.results[0].country;
    console.log('country is: ', country);
  
    return {
        country,
    }
  };