import React, { useState, useEffect } from "react"

//installed hook that accesses the local storage in the browser https://github.com/nas5w/use-local-storage
import useLocalStorage from "use-local-storage"

//Styling
import "./App.css"

//components
import Header from "./components/Header"
import Feed from "./components/Feed"

/* Using the .env process to keep my API_KEY private. */
const { REACT_APP_API_KEY } = process.env

function App() {
  /* Setting the initial state of the news and searchTerm to an empty string. */
  const [news, setNews] = useState("")
  /* Setting the initial state of the searchTerm to an empty string. */
  const [searchTerm, setSearchTerm] = useState("")

  /* Checking the browser for the user's theme in the browser. If the user's theme is dark, then the
default theme will be dark. If the user's theme is light, then the default theme will be light. */
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  )
  //const [country, setCountry] = useState("gb") //to be implemented
  const country = "gb"
  //const [language, setLanguage] = useState("en") //to be implemented
  const language = "en"
  const [topic, setTopic] = useState("breaking-news")

  /**
   * If the current theme is light, set the new theme to dark, otherwise set the new theme to light
   */
  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
  }

  /**
   * Function takes in a search term, sets the search term to the state, and then logs the search term to the
   * console, used in the SearchBar component
   * @param searchTerm - the value of the input field
   */
  const searchInput = (searchTerm) => {
    setSearchTerm(searchTerm)
    // For debuggin
    //console.log(searchTerm)
  }

  /**
   * Function takes a search term as an argument, sets the search term to the state, and logs the search term
   * to the console, used in the QuickSearch component
   * @param topic - The topic term that the user has selected.
   */
  const quickTopic = (topic) => {
    setTopic(topic)
  }

  // Initial Fetch - top news stories
  useEffect(() => {
    // Using async & await for callback to process then respond
    async function fetchNews() {
      const response = await fetch(
        `https://gnews.io/api/v4/top-headlines?&topic=${topic}&lang=${language}&${country}&token=${REACT_APP_API_KEY}`
      )
      const data = await response.json()
      //For Debugging
      //console.log(data)
      setNews(data)
    }
    fetchNews()
  }, [topic, country, language])

  //IUseEffect for Search Term change - fetch on change
  useEffect(() => {
    async function fetchNews() {
      const response = await fetch(
        `https://gnews.io/api/v4/search?q=${searchTerm}&in=title,content&lang=${language}&${country}&token=${REACT_APP_API_KEY}`
      )
      const data = await response.json()
      // For debugging
      // console.log(data)
      setNews(data)
    }
    if (searchTerm !== "") {
      fetchNews()
    }
  }, [searchTerm, country, language])

  return (
    <div data-testid="App" className="App" data-theme={theme}>
      <Header
        searchInput={searchInput}
        switchTheme={switchTheme}
        theme={theme}
        quickTopic={quickTopic}
      />
      {!news ? (
        <p>is Loading...</p>
      ) : (
        <>
          <div className="content">
            <Feed news={news} />
          </div>
        </>
      )}
    </div>
  )
}

export default App
