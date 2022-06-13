import React from "react"

//styling
import "./QuickTopic.css"

function QuickTopic({ quickTopic, topic }) {
  return (
    <>
      <button
        data-testid="QuickTopic"
        className="quickbtn"
        onClick={() => quickTopic(topic)}
      >
        {topic}
      </button>
    </>
  )
}

export default QuickTopic
