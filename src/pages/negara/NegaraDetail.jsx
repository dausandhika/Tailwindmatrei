import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const NegaraDetail = () => {
  const { id } = useParams(); // Assuming id is a country code or name
  const [country, setCountry] = useState(null);
  const [error, setError] = useState(null);

  const fetchCountryDetails = async () => {
    try {
      const response = await axios.get(`https://freetestapi.com/api/v1/countries/${id}`);
      console.log("Response data:", response.data); // Log the response data
      setCountry(response.data); // Set the country data
    } catch (error) {
      console.error("Error fetching country details", error);
      setError("Could not fetch country details.");
    }
  };

  useEffect(() => {
    fetchCountryDetails();
  }, [id]);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen px-4">
      {error && <p className="text-red-500">{error}</p>}
      {country ? (
        <div className="w-full max-w-4xl">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold mb-4">{country.name}</h1>
            <img
              className="w-full h-auto object-cover mb-8"
              src={country.flag} // Assuming the API returns a flag URL
              alt={country.name}
            />
          </div>
          <div className="text-center">
            <p className="text-lg mb-4">{country.description}</p>
            <p className="text-md mb-2">Ibu Kota: {country.capital}</p>
            <p className="text-md mb-2">Populasi: {country.population}</p>
            <p className="text-md mb-2">Benua: {country.region}</p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default NegaraDetail;
