import React from "react";
import { styled } from "@mui/system";
import { Divider, Stack } from "@mui/material";
import { Link } from "react-router-dom";

interface Props {
  title: string;
}

export const Home = (props: Props) => {
  return (
    <Root className="bg-[var(--sub-color)]">
      <NavBarContainer>
        <Logo>
          <LogoA href="#">Brand</LogoA>
        </Logo>
        <LogoNavigation>
          <Stack
            direction="row"
            divider={<Divider color="azure" orientation="vertical" flexItem />}
            spacing={2}
          >
            <li>
              <NavA to="/">Home</NavA>
            </li>
            <li>
              <NavA to="/dashboard">About</NavA>
            </li>
            <li>
              <NavA to="/signin">Learn More</NavA>
            </li>
          </Stack>
        </LogoNavigation>
        <div></div>
      </NavBarContainer>
      <Main>
        <div className="mx-auto mt-5 border border-t-[50px] w-[125px]"></div>
      </Main>
    </Root>
  );
};

const Root = styled("div")({
  padding: 0,
  margin: 0,
});
const NavBarContainer = styled("div")({
  backgroundColor: "#222",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: ".5em 0",
  position: "sticky",
  top: 0,
});
const Logo = styled("h1")({
  marginLeft: ".5em",
});
const LogoA = styled("a")({
  listStyle: "none",
  textDecoration: "none",
  color: "azure",
});
const LogoNavigation = styled("ul")({
  listStyle: "none",
  textDecoration: "none",
  display: "flex",
  marginRight: "10em",
});
const NavA = styled(Link)({
  padding: "1em",
  color: "azure",
  textDecoration: "none",
  fontSize: "1.2em",
});

const Main = styled("div")({
  width: "100vw",
  height: "100vh",
});
