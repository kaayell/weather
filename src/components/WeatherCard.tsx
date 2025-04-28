import {WeatherData} from "../types.tsx";

interface WeatherCardProps {
	data: WeatherData;
}
export function WeatherCard({data}: WeatherCardProps) {
	return (
		<div className="bg-gray-300 rounded-lg px-6 ring shadow-x1 ring-gray-90 flex">
			<div>
				<div>{data.temperature.degrees} °{data.temperature.unit[0]}</div>
				<div>{data.weatherCondition.description.text}</div>
				<div>Feels Likes: {data.feelsLikeTemperature.degrees} °{data.feelsLikeTemperature.unit[0]}</div>
				<div>Dew Point: {data.dewPoint.degrees} °{data.dewPoint.unit[0]}</div>
				<div>Heat Index: {data.heatIndex.degrees} °{data.heatIndex.unit[0]}</div>
				<div>Wind Chill: {data.windChill.degrees} °{data.windChill.unit[0]}</div>
				<div>Relative Humidity: {data.relativeHumidity}</div>
				<div>UV Index {data.uvIndex}</div>
				<div>Precipitation Probability: {data.precipitation.probability.type} {data.precipitation.probability.percent}%</div>
				<div>Thunderstorm Probability: {data.thunderstormProbability}</div>
				<div>Air Pressure: {data.airPressure.meanSeaLevelMillibars}</div>
				<div>Wind: {data.wind.direction.cardinal} {data.wind.speed.value} {data.wind.speed.unit} {data.wind.gust.value} {data.wind.gust.unit}</div>
				<div>Visibility: {data.visibility.distance} {data.visibility.unit}</div>
				<div>Temp Change: {data.currentConditionsHistory.temperatureChange.degrees} °{data.currentConditionsHistory.temperatureChange.unit[0]}</div>
				<div>Max Temp Change: {data.currentConditionsHistory.maxTemperature.degrees} °{data.currentConditionsHistory.maxTemperature.unit[0]}</div>
				<div>Min Temp Change: {data.currentConditionsHistory.minTemperature.degrees} °{data.currentConditionsHistory.minTemperature.unit[0]}</div>
			</div>
			<div>
				<img
					src={`${data.weatherCondition.iconBaseUri}.png`}
					alt={data.weatherCondition.description.text}
					className="w-16 h-16"/>
			</div>

		</div>
	)
}