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
    background-color: gray;
  }
`;
const StyledNav = styled.nav`
  position: relative;
  bottom: 0;
  width: 100vw;
  height: 10px;
  background: transparent;
  color: black;
  text-align: center;
  margin-top: 30px;
`;
