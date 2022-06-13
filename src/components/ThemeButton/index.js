import React from "react"

//styling
import "./ThemeButton.css"

function ThemeButton({ switchTheme, theme }) {
  return (
    <div>
      <button
        data-testid="ThemeButton"
        className="themebutton"
        onClick={switchTheme}
      >
        {theme === "light" ? "Dark" : "Light"} Theme
      </button>
    </div>
  )
}

export default ThemeButton
