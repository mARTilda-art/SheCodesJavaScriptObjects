let weather = {};
console.log(weather);

weather = { temp: 19, humidity: 50 };
console.log(weather);

console.log(weather.temp);
console.log(weather.humidity);

weather = { temp: 19, humidity: 50, windSpeed: 3 };
console.log(weather);

console.log(weather["temp"], weather["humidity"], weather["windSpeed"]);

let forecast = [
  { weekDay: "Monday", temperature: 18 },
  { weekDay: "Tuesday", temperature: 19 },
  { weekDay: "Wednesday", temperature: 20 },
  { weekDay: "Thursday", temperature: 21 },
  { weekDay: "Friday", temperature: 22 },
  { weekDay: "Saturday", temperature: 23 },
  { weekDay: "Sunday", temperature: 24 }
];

console.log(
  "The temperature on " +
    forecast[2].weekDay +
    " is " +
    forecast[2].temperature +
    " °C."
);
