import React from "react"

//styling
import "./Header.css"

//components
import SearchBar from "../SearchBar"
import ThemeButton from "../ThemeButton"
import QuickBar from "../QuickBar"

function Header({ searchInput, switchTheme, theme, quickTopic }) {
  /* set the state of the component hide/show menu icon on mobile/tablet. */
  // const [show, setShow] = useState(false)

  return (
    <div data-testid="Header" className="header">
      <div className="headerflex">
        {/* left */}
        <div className="header-left">
          <h1 className="logo">Percayso</h1>
          <h2 className="sublogo">News</h2>
        </div>
        {/* center */}
        <div className="header-center">
          <SearchBar searchInput={searchInput} />
        </div>

        {/* right */}
        <div className="header-right">
          <ThemeButton switchTheme={switchTheme} theme={theme} />
        </div>
      </div>
      <QuickBar quickTopic={quickTopic} />
    </div>
  )
}

export default Header
