import React from "react";
import { styled } from "@mui/system";
import { Divider, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import landing from "../../assets/images/landing.jpg";
import details from "../../assets/images/details-form.jpg";
import view from "../../assets/images/quick-view.jpg";
import organized from "../../assets/images/organized.jpg";
import tryout from "../../assets/images/tryout.jpg";
import { NavBar } from "../shared/NavBar";

interface Props {
  title: string;
}

export const Home = (props: Props) => {
  return (
    <Root>
      <NavBar />
      <Main className="relative mt-[10vh] h-[80vh] snap-center">
        <h1 className="font-montserrat text-6xl tracking-wide">
          Car Inventory
        </h1>
        <div className="mt-10 grid select-none grid-cols-1 grid-rows-4 gap-4 font-heebo md:grid-cols-2 md:grid-rows-2">
          <div className="w-96 place-self-stretch rounded-3xl border border-purple-600 bg-gradient-to-r from-purple-700 to-indigo-900 p-6 duration-300 hover:border hover:border-[var(--hover-color)]">
            <h4 className="mb-6 font-montserrat text-2xl">Add New Cars</h4>
            <p className="text-lg">
              Specify details about your new car and add it to your dashboard.
            </p>
          </div>
          <div className="w-96 place-self-stretch rounded-3xl border border-purple-600 bg-gradient-to-r from-purple-700 to-indigo-900 p-6 duration-300 hover:border hover:border-[var(--hover-color)]">
            <h4 className="mb-6 font-montserrat text-2xl">
              View All Your Cars
            </h4>
            <p className="text-lg">
              See all the cars in your dashboard and their current information.
            </p>
          </div>
          <div className="w-96 place-self-stretch rounded-3xl border border-purple-600 bg-gradient-to-r from-purple-700 to-indigo-900 p-6 duration-300 hover:border hover:border-[var(--hover-color)]">
            <h4 className="mb-6 font-montserrat text-2xl">
              Update Car Information
            </h4>
            <p className="text-lg">
              See something to change? Feel free to edit cars in your dashboard
              at any time.
            </p>
          </div>
          <div className="w-96 place-self-stretch rounded-3xl border border-purple-600 bg-gradient-to-r from-purple-700 to-indigo-900 p-6 duration-300 hover:border hover:border-[var(--hover-color)]">
            <h4 className="mb-6 font-montserrat text-2xl">Delete Car</h4>
            <p className="text-lg">
              Remove a car from your inventory with the click of a button.
            </p>
          </div>
        </div>
        <Link
          className="font-xl mt-14 animate-tranceBg rounded-full px-5 py-3 font-montserrat hover:outline hover:outline-[var(--hover-color)]"
          to={"/register"}
        >
          Get Started!
        </Link>
      </Main>
      <div className="relative my-[10vh] flex h-[80vh] snap-center items-center justify-center self-center border border-x-transparent border-y-pink-200 bg-gray-900 bg-opacity-60">
        <div className="h-4/5 w-[1000px]">
          <h1 className="font-montserrat text-6xl tracking-wide">
            Car Details
          </h1>
          <div className="grid grid-cols-1 gap-x-12 md:grid-cols-3">
            <div className="flex flex-col items-center justify-center">
              <img
                className="mt-20 h-72 w-72 rounded-2xl object-cover duration-100 hover:outline hover:outline-[var(--hover-color)]"
                src={details}
                alt="Details Form"
              />
              <h4 className="mb-4 mt-6 font-montserrat text-2xl">
                Details Form
              </h4>
              <p className="w-[14em] text-center text-lg">
                Enter the car's details, including make, model, year, and more.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img
                className="mt-20 h-72 w-72 rounded-2xl object-cover duration-100 hover:outline hover:outline-[var(--hover-color)]"
                src={view}
                alt="View"
              />
              <h4 className="mb-4 mt-6 font-montserrat text-2xl">View</h4>
              <p className="w-[14em] text-center text-lg">
                Quickly see the new vehicle added to your dashboard.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img
                className="mt-20 h-72 w-72 rounded-2xl object-cover duration-100 hover:outline hover:outline-[var(--hover-color)]"
                src={organized}
                alt="Organization"
              />
              <h4 className="mb-4 mt-6 font-montserrat text-2xl">
                Organization
              </h4>
              <p className="w-[14em] text-center text-lg">
                Easily keep track of all the cars in your inventory.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative my-[10vh] flex h-[80vh] snap-center items-center justify-center self-center border border-x-transparent border-y-pink-200 bg-gray-900 bg-opacity-60">
        <div className="flex h-4/5 w-[1000px]">
          <div className="flex h-full w-[60em] flex-col justify-center self-center pr-20">
            <h1 className="font-montserrat text-5xl leading-tight tracking-wide">
              Try Our Car Inventory Dashboard Today!
            </h1>
            <p className="mt-8 text-lg">
              Register now and add your vehicles to our inventory system. Our
              design is user-friendly and will help you keep track of the
              important information about your cars.
            </p>
            <div className="flex w-fit flex-col items-center">
              <p className="-mb-10 mt-8 text-sm">Already a member?</p>
              <Link
                className="font-xl mt-14 w-fit animate-tranceBg rounded-full px-5 py-3 font-montserrat hover:outline hover:outline-[var(--hover-color)]"
                to={"/login"}
              >
                Log Me In!
              </Link>
            </div>
          </div>
          <div className="h-5/6 w-[40em] self-center">
            <img
              className="h-full rounded-2xl object-cover duration-100 hover:outline hover:outline-[var(--hover-color)]"
              src={tryout}
              alt="Try Today"
            />
          </div>
        </div>
      </div>
    </Root>
  );
};

const Root = styled("div")({
  padding: 0,
  margin: 0,
  color: "var(--text-color)",
});

const NavBarContainer = styled("div")({
  position: "fixed",
  top: 0,
  width: "100vw",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: ".5em 0",
});
const Logo = styled("h1")({
  marginLeft: ".5em",
  fontSize: "1.5em",
  textTransform: "uppercase",
});
const LogoA = styled("a")({
  listStyle: "none",
  textDecoration: "none",
  color: "var(--text-color)",
});
const LogoNavigation = styled("ul")({
  listStyle: "none",
  textDecoration: "none",
  display: "flex",
  marginRight: "8em",
  justifyContent: "center",
  width: "100%",
});
const NavA = styled(Link)({
  padding: "1em",
  color: "var(--text-color)",
  textDecoration: "none",
});

const Main = styled("div")({
  width: "100%",
  backgroundImage: `linear-gradient(rgba(60, 109, 255, .8), rgba(38, 19, 111, .8)), url(${landing})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  borderTop: "1px solid pink",
  borderBottom: "1px solid pink",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});
