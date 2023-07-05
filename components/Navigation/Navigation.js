import Link from "next/link";
import styled from "styled-components";

export default function Navigation() {
  return (
    <StyledNav>
      <StyledLink href="/">Spotlight</StyledLink>
      <StyledLink href="/art-pieces">Art Pieces</StyledLink>
      <StyledLink href="/favorites">Favorites</StyledLink>
    </StyledNav>
  );
}
const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  padding: 5%;
  width: fit-content;
  height: fit-content;

  &:hover {
    color: violet;
  }
`;
const StyledNav = styled.nav`
  position: relative;
  bottom: 0;
  width: 100vw;
  height: 30px;
  background: gray;
  color: black;
  text-align: center;
`;
