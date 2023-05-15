import convertible from "../images/body-type/convertible.svg";
import coupe from "../images/body-type/coupe.svg";
import hatchback from "../images/body-type/hatchback.svg";
import minivan from "../images/body-type/minivan.svg";
import pickup from "../images/body-type/pickup.svg";
import sedan from "../images/body-type/sedan.svg";
import sports from "../images/body-type/sports.svg";
import suv from "../images/body-type/suv.svg";
import wagon from "../images/body-type/wagon.svg";

export const vehicle_types = [
  "Convertible",
  "Coupe",
  "Hatchback",
  "Van/Minivan",
  "Pickup",
  "Sedan",
  "Sports",
  "SUV",
  "Station Wagon",
];
export const bodyTypes = [
  { type: "Convertible", image: convertible, width: 100 },
  { type: "Coupe", image: coupe, width: 100 },
  { type: "Hatchback", image: hatchback, width: 90 },
  { type: "Van/Minivan", image: minivan, width: 110 },
  { type: "Pickup", image: pickup, width: 120 },
  { type: "Sedan", image: sedan, width: 110 },
  { type: "Sports", image: sports, width: 110 },
  { type: "SUV", image: suv, width: 100 },
  { type: "Station Wagon", image: wagon, width: 120 },
];

export const colors = [
  "Black",
  "Blue",
  "Brown",
  "Gold",
  "Gray",
  "Green",
  "Orange",
  "Purple",
  "Red",
  "Silver",
  "Tan",
  "White",
  "Yellow",
];
export const colorFilters = {
  Black:
    "invert(0%) sepia(0%) saturate(0%) hue-rotate(324deg) brightness(100%) contrast(100%)",
  Blue: "invert(8%) sepia(98%) saturate(7357%) hue-rotate(248deg) brightness(93%) contrast(145%)",
  Brown:
    "invert(16%) sepia(42%) saturate(5363%) hue-rotate(347deg) brightness(96%) contrast(83%)",
  Gold: "invert(82%) sepia(14%) saturate(6279%) hue-rotate(1deg) brightness(109%) contrast(104%)",
  Gray: "invert(52%) sepia(0%) saturate(0%) hue-rotate(235deg) brightness(97%) contrast(96%)",
  Green:
    "invert(24%) sepia(98%) saturate(1677%) hue-rotate(99deg) brightness(98%) contrast(101%)",
  Orange:
    "invert(65%) sepia(37%) saturate(2512%) hue-rotate(359deg) brightness(102%) contrast(105%)",
  Purple:
    "invert(9%) sepia(94%) saturate(5113%) hue-rotate(295deg) brightness(83%) contrast(110%)",
  Red: "invert(13%) sepia(90%) saturate(5627%) hue-rotate(3deg) brightness(98%) contrast(119%)",
  Silver:
    "invert(84%) sepia(15%) saturate(0%) hue-rotate(213deg) brightness(91%) contrast(90%)",
  Tan: "invert(82%) sepia(29%) saturate(387%) hue-rotate(351deg) brightness(87%) contrast(86%)",
  White:
    "invert(100%) sepia(0%) saturate(7500%) hue-rotate(24deg) brightness(104%) contrast(105%)",
  Yellow:
    "invert(90%) sepia(92%) saturate(1428%) hue-rotate(358deg) brightness(104%) contrast(107%)",
};