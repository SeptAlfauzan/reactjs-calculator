
export const resizeFont = (e, arg) => {
    var style = window.getComputedStyle(e, null).getPropertyValue("font-size");
    var fontSize = parseFloat(style);
    arg == "increase"
        ? (e.style.fontSize = `${30}px`)
        : (e.style.fontSize = `${fontSize - 2}px`);
};

export const handleKeydown = (e) => {
    // const whiteList = "+-123/456*789=.0";
    // // console.log(e.key, whiteList.includes(e.key));
    // if (whiteList.includes(e.key)) return setText(`${text}${e.key}`);
    // if (e.key == "Backspace") return handleDelete;
    // if (e.key == "c") return handleClear;
};
