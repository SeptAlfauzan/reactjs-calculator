export const isOperator = (e) => "/+-*".includes(e) ? true : false;

export const isNegativeRemover = (target) => "+/*".includes(target) ? true : false;

export const replaceOperator = (target, replacement) => {
    const arrayTarget = target.split("");
    while (isOperator(arrayTarget[arrayTarget.length - 1])) arrayTarget.pop();

    arrayTarget.push(replacement);
    return arrayTarget.join("");
};

export const handleCalculate = (temp, setText, setTemp, setCalculated) => {
    const array = temp.split("");
    if (isOperator(array[array.length - 1])) array.pop();
    setText(`${eval(array.join(""))}`);
    setTemp(`${eval(array.join(""))}`);
    setCalculated(true);
};

export const handleDelete = (text, temp, setText, setTemp) => {
    const newStr = text.split("");
    const newStrTemp = temp.split("");
    newStr.pop();
    newStrTemp.pop();

    newStr.length == 0 ? setText("0") : setText(newStr.join(""));
    setTemp(newStrTemp.join(""));
};

export const handleClear = (setText, setTemp) => {
    setTemp("");
    setText("0");
};

export const handleClick = (e, text, temp, calculated, setText, setTemp, setCalculated) => {
    const value = e.target.value;
    if (calculated && !isNaN(value * 1)) {
        setText(value);
        setTemp(String(Number(value)));
        setCalculated(false);
        return;
    }

    if (isOperator(value)) {
        setText(value);
        setCalculated(false);
        const lastChar = temp[temp.length - 1];

        if (!isNegativeRemover(value))
            return setTemp(temp + value);

        if (isOperator(lastChar) && isNegativeRemover(value))
            return setTemp(replaceOperator(temp, value));

        const copyArr = temp.slice().split("");
        copyArr.pop();
        copyArr.push(value);
        setTemp(copyArr.join(""));
    }

    if (value == "." && text.includes(value)) return null;
    if (!isOperator(value)) setText(text + value);
    setTemp(temp + value);
    setCalculated(false);
    // when first char is 0 and input value is not ., then replace 0 with current input value
    if (text[0] == "0" && value != "." && text.length == 1)
        setText(text.slice().replace("0", value));
};