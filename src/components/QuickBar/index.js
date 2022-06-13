import React from "react"

//styling
import "./QuickBar.css"

//components
import QuickTopic from "../QuickTopic"

//data
import { topicsArr } from "../../Data/data.js"

function QuickBar({ quickTopic }) {
  return (
    <div data-testid="QuickBar" className="qtwrapper">
      <div className="qtcntr">
        {/* using i for key not ideal but won't change as topic values hardcoded
            Mapping over the topicsArr array and returning a QuickTopic component for each item in the
       array. */}
        {topicsArr.map((topic, i) => {
          return <QuickTopic quickTopic={quickTopic} topic={topic} key={i} />
        })}
      </div>
    </div>
  )
}

export default QuickBar
