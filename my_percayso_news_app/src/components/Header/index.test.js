import { render, screen } from "@testing-library/react"
import Header from "./index"

const testProps = {
  quickInput: jest.fn(),
  switchTheme: jest.fn(),
  theme: "light",
  quickTopic: jest.fn(),
}

test("Header component renders to screen", () => {
  render(<Header {...testProps} />)
  const actual = screen.getByTestId("Header")
  expect(actual).toBeInTheDocument()
})
