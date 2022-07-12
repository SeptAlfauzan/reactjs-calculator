import React, { useState } from "react";
import "./App.css";
import ButtonPad from "./components/buttonPad";
import {
  handleClick,
  handleCalculate,
  handleDelete,
  handleClear,
} from "./lib/calculator";

import { resizeFont, handleKeydown } from "./lib/utils";

function App() {
  const [text, setText] = useState("0");
  const [temp, setTemp] = useState("0");
  const [calculated, setCalculated] = useState(false);

  React.useEffect(() => {
    document.addEventListener("keydown", handleKeydown);
    return () => document.removeEventListener("keydown", handleKeydown);
  }, []);

  React.useEffect(() => {
    const display = document.querySelector("#display");
    display.scrollHeight > display.clientHeight
      ? resizeFont(display, "decrease")
      : null;
  }, [text]);

  return (
    <main>
      <div id="container">
        <div id="temporary">{temp}</div>
        {buttonsContent.map((data, key) => {
          if (data.id == "display")
            return (
              <div id={data.id} key={key}>
                {text}
              </div>
            );
          if (data.id == "clear")
            return (
              <ButtonPad
                value={data.value}
                action={() => data.action(setText, setTemp)}
                id={data.id}
                key={key}
              />
            );
          if (data.id == "delete")
            return (
              <ButtonPad
                value={data.value}
                action={() => data.action(text, temp, setText, setTemp)}
                id={data.id}
                key={key}
              />
            );
          if (data.id == "equals")
            return (
              <ButtonPad
                value={data.value}
                action={() =>
                  data.action(temp, setText, setTemp, setCalculated)
                }
                id={data.id}
                key={key}
              />
            );
          return (
            <ButtonPad
              value={data.value}
              action={(e) =>
                data.action(
                  e,
                  text,
                  temp,
                  calculated,
                  setText,
                  setTemp,
                  setCalculated
                )
              }
              id={data.id}
              key={key}
            />
          );
        })}
        <button onClick={handleClick} id="empty" disabled></button>
      </div>
    </main>
  );
}

const buttonsContent = [
  { id: "display" },
  {
    id: "clear",
    value: "C",
    action: (setText, setTemp) => handleClear(setText, setTemp),
  },
  {
    id: "add",
    value: "+",
    action: (e, text, temp, calculated, setText, setTemp, setCalculated) =>
      handleClick(e, text, temp, calculated, setText, setTemp, setCalculated),
  },
  {
    id: "subtract",
    value: "-",
    action: (e, text, temp, calculated, setText, setTemp, setCalculated) =>
      handleClick(e, text, temp, calculated, setText, setTemp, setCalculated),
  },
  {
    id: "delete",
    value: "Del",
    action: (text, temp, setText, setTemp) =>
      handleDelete(text, temp, setText, setTemp),
  },
  {
    id: "one",
    value: "1",
    action: (e, text, temp, calculated, setText, setTemp, setCalculated) =>
      handleClick(e, text, temp, calculated, setText, setTemp, setCalculated),
  },
  {
    id: "two",
    value: "2",
    action: (e, text, temp, calculated, setText, setTemp, setCalculated) =>
      handleClick(e, text, temp, calculated, setText, setTemp, setCalculated),
  },
  {
    id: "three",
    value: "3",
    action: (e, text, temp, calculated, setText, setTemp, setCalculated) =>
      handleClick(e, text, temp, calculated, setText, setTemp, setCalculated),
  },
  {
    id: "divide",
    value: "/",
    action: (e, text, temp, calculated, setText, setTemp, setCalculated) =>
      handleClick(e, text, temp, calculated, setText, setTemp, setCalculated),
  },
  {
    id: "four",
    value: "4",
    action: (e, text, temp, calculated, setText, setTemp, setCalculated) =>
      handleClick(e, text, temp, calculated, setText, setTemp, setCalculated),
  },
  {
    id: "five",
    value: "5",
    action: (e, text, temp, calculated, setText, setTemp, setCalculated) =>
      handleClick(e, text, temp, calculated, setText, setTemp, setCalculated),
  },
  {
    id: "six",
    value: "6",
    action: (e, text, temp, calculated, setText, setTemp, setCalculated) =>
      handleClick(e, text, temp, calculated, setText, setTemp, setCalculated),
  },
  {
    id: "multiply",
    value: "*",
    action: (e, text, temp, calculated, setText, setTemp, setCalculated) =>
      handleClick(e, text, temp, calculated, setText, setTemp, setCalculated),
  },
  {
    id: "seven",
    value: "7",
    action: (e, text, temp, calculated, setText, setTemp, setCalculated) =>
      handleClick(e, text, temp, calculated, setText, setTemp, setCalculated),
  },
  {
    id: "eight",
    value: "8",
    action: (e, text, temp, calculated, setText, setTemp, setCalculated) =>
      handleClick(e, text, temp, calculated, setText, setTemp, setCalculated),
  },
  {
    id: "nine",
    value: "9",
    action: (e, text, temp, calculated, setText, setTemp, setCalculated) =>
      handleClick(e, text, temp, calculated, setText, setTemp, setCalculated),
  },
  {
    id: "equals",
    value: "=",
    action: (temp, setText, setTemp, setCalculated) =>
      handleCalculate(temp, setText, setTemp, setCalculated),
  },
  {
    id: "decimal",
    value: ".",
    action: (e, text, temp, calculated, setText, setTemp, setCalculated) =>
      handleClick(e, text, temp, calculated, setText, setTemp, setCalculated),
  },
  {
    id: "zero",
    value: "0",
    action: (e, text, temp, calculated, setText, setTemp, setCalculated) =>
      handleClick(e, text, temp, calculated, setText, setTemp, setCalculated),
  },
];

export default App;
