import { render, screen } from "@testing-library/react";
import ArtPiecePreview from "./index";

const mockArtPiece = {
  slug: "orange-red-and-green",
  artist: "Steve Johnson",
  name: "Orange Red and Green Abstract Painting",
  imageSource:
    "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg",
  year: "2018",
  genre: "Abstract Painting",
  colors: ["#0f5855", "#e6ba15", "#b42011", "#cec4c6", "#d5561f"],
  dimensions: {
    height: 2432,
    width: 1920,
    type: "jpg",
  },
};

test("renders the image", () => {
  const artPiece = mockArtPiece;

  render(<ArtPiecePreview data={artPiece} />);

  const imageElement = screen.getByAltText(
    `piece of art title: ${artPiece.name} by ${artPiece.artist}`
  );

  expect(imageElement).toBeInTheDocument();
});

test("renders the title and artist name", () => {
  const artPiece = mockArtPiece;

  render(<ArtPiecePreview data={artPiece} />);

  const titleElement = screen.getByText(
    `"${artPiece.name}" : ${artPiece.artist}`
  );

  expect(titleElement).toBeInTheDocument();
});
