import React, { useState } from "react"

//styling
import "./SearchBar.css"

//import icon for search bar
import { FaSistrix } from "react-icons/fa"

function SearchBar({ searchInput }) {
  /* Creating a state variable called userInput and a function called setUserInput. */
  const [userInput, setUserInput] = useState("")

  return (
    <div data-testid="SearchBar" className="searchbarcntr">
      <div className="search">
        <input
          type="text"
          className="searchinput"
          placeholder="Search..."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        ></input>
        <button
          className="searchbutton"
          onClick={() => {
            searchInput(userInput)
            setUserInput("")
          }}
        >
          <FaSistrix />
        </button>
      </div>
    </div>
  )
}

export default SearchBar
