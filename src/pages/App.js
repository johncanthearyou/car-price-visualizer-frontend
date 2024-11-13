import React from "react";

// TODO: this should use integrations
const modelMap = new Map([
  ["Chevrolet", ["Camero", "Chevelle"]],
  ["Ford", ["Mustang", "Thunderbird"]],
]);
const years = Array.from(initializeYears());

export default function App() {
  const [year, setYear] = React.useState(2024);
  const [make, setMake] = React.useState([...modelMap.keys()][0]);
  const [model, setModel] = React.useState(modelMap.get(make)[0]);

  return (
    <div>
      <label htmlFor="year">Year: </label>
      <select
        name="year"
        id="year"
        defaultValue={year}
        onChange={(event) => setYear(event.target.value)}
      >
        {years.map((item) => (
          <option>{item}</option>
        ))}
      </select>
      <label htmlFor="make">Make: </label>
      <select
        name="make"
        id="make"
        defaultValue={make}
        onChange={(event) => {
          setModel(modelMap.get(event.target.value)[0]);
          setMake(event.target.value);
        }}
      >
        {[...modelMap.keys()].map((item) => (
          <option>{item}</option>
        ))}
      </select>
      <label htmlFor="model">Model: </label>
      <select
        name="model"
        id="model"
        defaultValue={model}
        onChange={(event) => setModel(event.target.value)}
      >
        {[...modelMap.get(make)].map((item) => (
          <option>{item}</option>
        ))}
      </select>
    </div>
  );
}

function initializeYears() {
  const year = new Date().getFullYear();
  let years = new Array(20);
  for (let i = 0; i <= 20; i++) {
    years[i] = year - i;
  }

  return years;
}
