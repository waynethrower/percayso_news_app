import React from "react"

//styling
import "./Feed.css"

//components
import Article from "../Article"

function Feed({ news }) {
  return (
    <div data-testid="Feed" className="feed">
      {news.articles.length > 0 &&
        news.articles.map((article, index) => (
          <Article article={article} key={index} />
        ))}
    </div>
  )
}

export default Feed
