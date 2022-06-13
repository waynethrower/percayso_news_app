import { render, screen } from "@testing-library/react"
import SearchBar from "./index"

const testProps = {
  SearchBar: jest.fn(),
}

test("SearchBar component is displayed on the document", () => {
  render(<SearchBar {...testProps} />)
  const actual = screen.getByTestId("SearchBar")
  expect(actual).toBeInTheDocument()
})
