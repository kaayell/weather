import {WeatherData} from "../types.tsx";

const GOOGLE_WEATHER_API_URL = 'https://weather.googleapis.com/v1/currentConditions:lookup'
const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

export const fetchWeatherData = async (place: google.maps.places.PlaceResult): Promise<WeatherData> => {
	try {
		const location = place.geometry?.location
		const weatherUrl = `${GOOGLE_WEATHER_API_URL}?key=${GOOGLE_API_KEY}&location.latitude=${location?.lat()}&location.longitude=${location?.lng()}&unitsSystem=IMPERIAL`
		const weatherResponse = await fetch(weatherUrl)
		return await weatherResponse.json()
	} catch (error) {
		console.log(error)
		throw error;
	}
};
