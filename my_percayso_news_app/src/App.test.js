import { render, screen } from "@testing-library/react"
import App from "./App"

test("App to the screen", () => {
  render(<App />)
  const actual = screen.getByTestId("App")
  expect(actual).toBeInTheDocument()
})
