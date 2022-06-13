import React from "react"

import "./Article.css"

function Article({ article }) {
  /* This is cleaning up the content of the article. The content is coming in with a [nnnn] at the end
 of the content. This is removing that. */
  const index = article.content.indexOf("[")
  let newContent
  if (index !== -1) {
    newContent = article.content.slice(0, index)
  }

  /* This is cleaning up the date and time. The date and time is coming in with a T and Z in the middle
of the date and time. This is removing that. */
  const index1 = article.publishedAt.indexOf("T")
  let published
  if (index1 !== -1) {
    published = article.publishedAt.replace(/[TZ]/g, " ")
  }

  return (
    // Container for the article component
    <div data-testid="Article" className="articlecntr">
      <img className="articleimg" src={article.image} alt="article"></img>
      <h3 className="articletitle">{article.title}</h3>
      <p className="articlecontent">
        {newContent}
        <a className="articlerdmr" href={article.url} target="_new">
          Read More
        </a>
      </p>
      <div className="btmcntr">
        <p className="psrc">Source: </p>
        <a className="articlesrc" href={article.source.url} target="_new">
          {article.source.name}
        </a>
      </div>
      <p className="articlepub">Published: {published}</p>
    </div>
  )
}

export default Article
