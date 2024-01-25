import React, { useState } from "react";

function ThemeSwither() {
  const [btnText, setbtnText] = useState("LightMode");

  const ClickbuttonChangeText = () => {
    if (btnText !== "DarkMode") {
      setbtnText("DarkMode");
    } else {
      setbtnText("LightMode");
    }
  };
  return (
    <>
      <button
        className="btn btn-primary"
        onClick={ClickbuttonChangeText}
        value={btnText}
      >
        {btnText}
      </button>
    </>
  );
}

export default ThemeSwither;
