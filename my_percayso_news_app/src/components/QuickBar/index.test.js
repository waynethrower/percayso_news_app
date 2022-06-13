import { render, screen } from "@testing-library/react"
import QuickBar from "./index"

const testProps = {
  quickTopic: jest.fn(),
}

test("QuickBar component is displayed on the document", () => {
  render(<QuickBar {...testProps} />)
  const actual = screen.getByTestId("QuickBar")
  expect(actual).toBeInTheDocument()
})
