import { render, screen, waitFor } from "@testing-library/react";
import ArtPieceDetails from "./index";

const mockArtPieces = {
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

test("display art piece image", () => {
  render(
    <ArtPieceDetails
      image={mockArtPieces.imageSource}
      title={mockArtPieces.name}
      artist={mockArtPieces.artist}
    />
  );
  const image = screen.getByAltText(
    `piece of art title: ${mockArtPieces.name} by ${mockArtPieces.artist}`
  );
  expect(image).toBeInTheDocument();
});

test("display art piece title", () => {
  render(<ArtPieceDetails title={mockArtPieces.name} />);
  const title = screen.getByText(`"${mockArtPieces.name}"`);
  expect(title).toBeInTheDocument();
});

test("display art piece artist", () => {
  render(<ArtPieceDetails artist={mockArtPieces.artist} />);
  const artist = screen.getByText(mockArtPieces.artist);
  expect(artist).toBeInTheDocument();
});

test("display art piece year", () => {
  render(<ArtPieceDetails year={mockArtPieces.year} />);
  const year = screen.getByText(mockArtPieces.year);
  expect(year).toBeInTheDocument();
});

test("display art piece genre", () => {
  render(<ArtPieceDetails genre={mockArtPieces.genre} />);
  const genre = screen.getByText(mockArtPieces.genre);
  expect(genre).toBeInTheDocument();
});
