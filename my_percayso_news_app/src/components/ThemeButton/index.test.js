import { render, screen } from "@testing-library/react"
import ThemeButton from "./index"

const testProps = {
  switchTheme: jest.fn(),
  theme: "test",
}

test("ThemeButton component is displayed on the document", () => {
  render(<ThemeButton {...testProps} />)
  const actual = screen.getByTestId("ThemeButton")
  expect(actual).toBeInTheDocument()
})
