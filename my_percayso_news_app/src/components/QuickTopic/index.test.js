import { render, screen } from "@testing-library/react"
import QuickTopic from "./index"

const testProps = {
  quickTopic: jest.fn(),
  topic: "test",
}

test("QuickTopic component is displayed on the document", () => {
  render(<QuickTopic {...testProps} />)
  const actual = screen.getByTestId("QuickTopic")
  expect(actual).toBeInTheDocument()
})
