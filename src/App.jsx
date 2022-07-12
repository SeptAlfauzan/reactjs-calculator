import React, { useState } from "react";
import "./App.css";
import ButtonPad from "./components/buttonPad";
import Container from "./components/container";
import { resizeFont, handleKeydown } from "./lib/utils";
import { buttonsContent } from "./lib/buttonsObjects";

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
    <Container>
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
              action={() => data.action(temp, setText, setTemp, setCalculated)}
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
      <button id="empty" disabled></button>
    </Container>
  );
}
export default App;
