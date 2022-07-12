import {
    handleClick,
    handleCalculate,
    handleDelete,
    handleClear,
} from './calculator';

export const buttonsContent = [
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