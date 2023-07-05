import { render, screen } from "@testing-library/react";
import Navigation from "./Navigation";

test("displays navigation link - Spotlight", () => {
  render(<Navigation />);
  const spotlightLink = screen.getByRole("link", { name: /spotlight/i });
  expect(spotlightLink).toBeInTheDocument();
});

test("display navigation link -Pieces", () => {
  render(<Navigation />);
  const piecesLink = screen.getByRole("link", { name: /pieces/i });
  expect(piecesLink).toBeInTheDocument();
});
