import React from "react";

const themes = ["light", "dark"];

const user = {
  theme: "dark",
};

const changeTheme = (e) => {
  user.theme = e.target.value;

  document.documentElement.className = "";
  document.documentElement.classList.add(`theme-${user.theme}`);
};

export default () => (
  <header>
    <select defaultValue={user.theme} onChange={changeTheme}>
      {themes.map((theme, index) => (
        <option value={theme} key={index}>
          {theme}
        </option>
      ))}
    </select>
  </header>
);
