import {WeatherData} from "../types.tsx";

interface WeatherCardProps {
	data: WeatherData;
}

export function WeatherCard({data}: WeatherCardProps) {
	return (
		<div className="m-3 grid grid-cols-2 gap-y-1 gap-x-6 rounded-lg bg-gray-100 p-4 px-7 shadow-xs">
			<div className="items-center text-5xl">{data.temperature.degrees} °{data.temperature.unit[0]}</div>
			<div className="flex items-center justify-between">
				<div className="text-sm font-medium">{data.weatherCondition.description.text}</div>
				<img
					src={`${data.weatherCondition.iconBaseUri}.png`}
					alt={data.weatherCondition.description.text}
					className="w-16 h-16"/>
			</div>
			<div className="flex items-center text-sm font-light">
				Feels Like:
				<div className="font-bold">{data.feelsLikeTemperature.degrees}°{data.feelsLikeTemperature.unit[0]}</div>
			</div>
			<div className="flex items-center text-sm font-light">
				High:
				<div className="font-bold">{data.currentConditionsHistory.maxTemperature.degrees}°{data.currentConditionsHistory.maxTemperature.unit[0]}</div>
				Low:
				<div className="font-bold">{data.currentConditionsHistory.minTemperature.degrees}°{data.currentConditionsHistory.minTemperature.unit[0]}</div>
			</div>
			<div className="flex items-center text-sm font-light">
				Temp 24h Change:
				<div className="font-bold">{data.currentConditionsHistory.temperatureChange.degrees}°{data.currentConditionsHistory.temperatureChange.unit[0]}</div>
			</div>
			<div className="flex items-center text-sm font-light">QPF: <div className="font-bold">{data.currentConditionsHistory.qpf.quantity} {data.currentConditionsHistory.qpf.unit} </div></div>
			<div className="flex items-center text-sm font-light">Thunderstorm Probability <div className="font-bold">{data.thunderstormProbability}</div></div>
			<div className="flex items-center text-sm font-light">Rain Probability <div className="font-bold">{data.precipitation.probability.type} {data.precipitation.probability.percent}%</div></div>
		</div>
	)
}