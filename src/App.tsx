import {useEffect, useState} from "react";
import Autocomplete from "react-google-autocomplete"
import {WeatherData} from "./types.tsx";
import './App.css'
import {WeatherCard} from "./components/WeatherCard.tsx";
import {fetchWeatherData} from "./hooks/fetchWeatherData.tsx";

const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

function App() {
	const [place, setPlace] = useState<google.maps.places.PlaceResult | null>(null);
	const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

	const fetchWeather = () => {
		if (!place) return;
		fetchWeatherData(place)
			.then((data) => {
				console.log(JSON.stringify(data, null, 2))
				setWeatherData(data)
			})
	}

	useEffect(() => {
		fetchWeather();
	}, [place]);

	return (
		<>
			<div>
				<Autocomplete
					apiKey={GOOGLE_API_KEY}
					onPlaceSelected={(place) => setPlace(place)}/>
				<button onClick={fetchWeather}>
					<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"
						 stroke="" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"
						 className="lucide lucide-rotate-ccw-icon lucide-rotate-ccw stroke-indigo-500 hover:stroke-indigo-300">
						<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
						<path d="M3 3v5h5"/>
					</svg>
				</button>
			</div>
			{weatherData && <WeatherCard data={weatherData}/>}
		</>
	)
}

export default App
