import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import {
  getMake,
  getModel,
  getYear,
  getColor,
  getPrice,
  getIsNew,
  getVehicleType,
  getFuelType,
  getImage,
} from "../../redux/slices/rootSlice";
import { serverCalls } from "../../api";
import { Combobox } from "../shared/InputFields/Combobox";
import newCarData from "../../assets/data/newCarData.json";
import usedCarData from "../../assets/data/usedCarData.json";
import { vehicle_types, colors } from "../../assets/data/carData";
import { CurrencyDollarIcon } from "@heroicons/react/24/outline";
import convertible from "../../assets/images/body-type/convertible.png";
import coupe from "../../assets/images/body-type/coupe.png";
import hatchback from "../../assets/images/body-type/hatchback.png";
import minivan from "../../assets/images/body-type/minivan.png";
import pickup from "../../assets/images/body-type/pickup.png";
import sedan from "../../assets/images/body-type/sedan.png";
import sports from "../../assets/images/body-type/sports.png";
import suv from "../../assets/images/body-type/suv.png";
import wagon from "../../assets/images/body-type/wagon.png";

type BrandModels = {
  [key: string]: string[];
};
const carData = {
  ...usedCarData,
  brands_models: {
    ...usedCarData.brands_models,
    ...newCarData.brands_models,
  } as BrandModels,
};

const makes = Object.keys(carData.brands_models);
const years = Array.from({ length: 30 }, (_, i) =>
  (new Date().getFullYear() - i).toString()
);

interface CarFormProps {
  id?: string;
  data?: any;
}

export const CarForm = (props: CarFormProps) => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm({});
  const { ref, ...registerProps } = register("price");
  const comboboxRef = useRef<HTMLInputElement>(null);
  const [stage, setStage] = useState(0);

  const [selectedMake, setSelectedMake] = useState<{
    id: number;
    name: string;
  } | null>(null);
  const [selectedModel, setSelectedModel] = useState<{
    id: number;
    name: string;
  } | null>(null);
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedVehicleType, setSelectedVehicleType] = useState<{
    id: string;
    name: string;
  } | null>(null);
  const [selectedColor, setSelectedColor] = useState<{
    id: number;
    name: keyof typeof colorFilters;
  } | null>(null);
  const [priceInput, setPriceInput] = useState("");
  const [isNew, setIsNew] = useState(false);

  const handleMakeChange = (value: any) => {
    setSelectedMake(value);
    if (value) setStage(1);
    else resetStagesFrom(0);
  };

  const handleModelChange = (value: any) => {
    setSelectedModel(value);
    if (value) setStage(2);
    else resetStagesFrom(1);
  };

  const handleYearChange = (value: any) => {
    setSelectedYear(value);
    if (value) setStage(3);
    else resetStagesFrom(2);
  };

  const handleVehicleTypeChange = (value: any) => {
    const type = vehicle_types.find((t) => t === value.name);
    if (type) {
      setSelectedVehicleType({ id: value.id.toString(), name: type });
    } else {
      setSelectedVehicleType(null);
    }
    if (value) setStage(4);
    else resetStagesFrom(3);
  };

  const handleColorChange = (value: any) => {
    setSelectedColor(value);
    if (value) setStage(5);
    else resetStagesFrom(4);
  };

  const resetStagesFrom = (fromStage: number) => {
    if (fromStage <= 0) setSelectedMake(null);
    if (fromStage <= 1) setSelectedModel(null);
    if (fromStage <= 2) setSelectedYear(null);
    if (fromStage <= 3) setSelectedVehicleType(null);
    if (fromStage <= 4) setSelectedColor(null);
    if (fromStage <= 5) {
      setPriceInput("");
      setIsNew(false);
    }
    setStage(fromStage);
  };

  const colorFilters = {
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

  const bodyTypes = [
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

  const handlePriceInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    let input = event.target.value.replace(/[^\d]/g, "");
    while (input.length < 3) {
      input = "0" + input;
    }
    let integerPart = input.slice(0, -2).replace(/^0+/, "") || "0";
    let decimalPart = input.slice(-2);
    let formattedInput = integerPart + "." + decimalPart;
    setPriceInput(formattedInput === "0.00" ? "" : formattedInput);
    registerProps.onChange(event);
  };

  const getModels = () => {
    if (!selectedMake) return [];
    const modelsSet = new Set(
      carData.brands_models[selectedMake.name as string]
    );
    return Array.from(modelsSet as Set<string>).map(
      (model: string, index: number) => ({
        id: index,
        name: model,
      })
    );
  };

  const onSubmit = async (data: any, event: any) => {
    let price = parseFloat(data.price);
    if (!isNaN(price)) {
      data.price = (price / 100).toFixed(2);
    } else {
      data.price = "0.00";
    }
    data.vehicle_type = selectedVehicleType ? selectedVehicleType.name : null;
    if (props.id!) {
      await serverCalls.update(props.id!, data);
      window.location.reload();
      event.target.reset();
    } else {
      dispatch(getMake(data.make));
      dispatch(getModel(data.model));
      dispatch(getYear(data.year));
      dispatch(getColor(data.color));
      dispatch(getPrice(data.price));
      dispatch(getIsNew(data.is_new));
      dispatch(getVehicleType(data.vehicle_type));
      dispatch(getFuelType(data.fuel_type));
      dispatch(getImage(data.image));
      await serverCalls.create(data);
      window.location.reload();
    }
    const currentYear = new Date().getFullYear();
    if (data.year === currentYear.toString()) {
      data.is_new = true;
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-start"
    >
      <div className="flex justify-center">
        <Combobox
          {...register("make")}
          name="make"
          placeholder="Toyota"
          items={makes.map((make, index) => ({ id: index, name: make }))}
          selectedItem={selectedMake}
          onChange={handleMakeChange}
          className="z-30 mr-12 w-[120px]"
          disabled={stage < 0}
        />
        <Combobox
          {...register("model")}
          name="model"
          placeholder="Corolla"
          items={getModels()}
          selectedItem={selectedModel}
          onChange={handleModelChange}
          className="mr-12 w-[15em]"
          disabled={stage < 1}
        />
        <Combobox
          {...register("year")}
          name="year"
          placeholder="2022"
          items={years.map((year, index) => ({
            id: index,
            name: year.toString(),
          }))}
          selectedItem={selectedYear}
          onChange={handleYearChange}
          className="w-[3.5em]"
          disabled={stage < 2}
        />
      </div>
      <div className="mx-auto flex w-[545px] items-center justify-center">
        <div className="flex w-[120px] flex-col">
          <Combobox
            ref={comboboxRef}
            name="vehicle_type"
            placeholder="Sedan"
            items={vehicle_types.map((vehicle_type, index) => ({
              id: index,
              name: vehicle_type,
            }))}
            selectedItem={
              selectedVehicleType
                ? {
                    id: parseInt(selectedVehicleType.id),
                    name: selectedVehicleType.name,
                  }
                : null
            }
            onChange={handleVehicleTypeChange}
            className="z-20 my-4 w-full"
            disabled={stage < 3}
          />
          <Combobox
            {...register("color")}
            name="color"
            placeholder="Blue"
            items={colors.map((color, index) => ({
              id: index,
              name: color,
            }))}
            selectedItem={selectedColor}
            onChange={handleColorChange}
            className="z-10 w-full"
            disabled={stage < 4}
          />
          <div
            className={`translate-x-[2px]} z-0 mb-8 mt-4 flex w-[120px] -translate-y-2 ${
              stage < 5 ? "pointer-events-none opacity-40" : ""
            }`}
          >
            <div className="flex -translate-x-4 flex-col">
              <div className="flex -translate-x-6 translate-y-0.5 items-center">
                <span className="-translate-x-0.5 translate-y-7">
                  <CurrencyDollarIcon className="mr-1 h-6 w-6 text-[var(--text-color)]" />
                </span>
                <label htmlFor="price" className="text-sm font-medium">
                  Price:
                </label>
              </div>
              <input
                type="text"
                inputMode="decimal"
                pattern="^[0-9]*[.,]?[0-9]*$"
                value={priceInput === "0.00" ? "" : priceInput}
                placeholder="0.00"
                ref={ref}
                className="hover:-ring-offset-1 w-[75px] rounded-lg border-0 bg-slate-800 py-1.5 pl-4 text-right text-[var(--text-color)] shadow-sm ring-1 ring-inset ring-violet-500 hover:ring-1 hover:ring-[var(--hover-color)] focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={handlePriceInput}
                disabled={stage < 5}
              />
            </div>
            <div className="flex -translate-x-[0.5em] translate-y-0.5 flex-col">
              <label htmlFor="is_new" className="text-sm font-medium">
                New?
              </label>
              <input
                className="hover:border-1 mx-auto my-auto h-5 w-5 cursor-pointer rounded-md border-2 border-sky-500 bg-slate-800 text-violet-600 hover:border-[var(--hover-color)] focus:animate-trance focus:ring-[animate-trance]"
                {...register("is_new")}
                id="is_new"
                type="checkbox"
                checked={isNew}
                onChange={(e) => setIsNew(e.target.checked)}
                disabled={stage < 5}
              />
            </div>
          </div>
        </div>
        <div
          className={`relative ml-4 mt-2 grid h-[13.75em] w-full scale-90 cursor-pointer select-none grid-cols-3 grid-rows-3 flex-col place-items-center items-end gap-2 rounded-2xl border-2 border-dashed border-indigo-400 p-2 ${
            stage < 4 ? "pointer-events-none opacity-40" : ""
          }`}
        >
          {bodyTypes.map(({ type, image, width }, index) => {
            const isSelected =
              selectedVehicleType && selectedVehicleType.name === type;
            return (
              <div
                key={type}
                className={`flex h-full w-full flex-col items-center justify-center rounded-2xl duration-300 ${
                  isSelected
                    ? isNew
                      ? "animate-bodyBg"
                      : "bg-[var(--hover-extra-color)]"
                    : isNew
                    ? "hover:animate-bodyBg focus:animate-bodyBg"
                    : "hover:bg-[var(--hover-extra-color)] focus:bg-[var(--hover-extra-color)]"
                }`}
                onClick={() => {
                  if (isSelected) {
                    setSelectedVehicleType(null);
                  } else {
                    const vehicleType = vehicle_types[index];
                    handleVehicleTypeChange({
                      id: index.toString(),
                      name: vehicleType,
                    });
                    setSelectedVehicleType({
                      id: index.toString(),
                      name: vehicleType,
                    });
                    if (comboboxRef.current) {
                      comboboxRef.current.focus();
                    }
                  }
                  console.log(selectedVehicleType);
                }}
              >
                <img
                  src={image}
                  alt={type}
                  className="h-fit object-cover"
                  style={{
                    width: `${width}px`,
                    filter: selectedColor
                      ? `grayscale(100%) ${colorFilters[selectedColor.name]}`
                      : "none",
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="mx-auto">
        <button
          type="submit"
          className="font-xl mt-14 animate-tranceBg rounded-full px-10 py-3 font-montserrat tracking-widest hover:outline hover:outline-[var(--hover-color)]"
        >
          {props.id ? "Update Car" : "Add Car"}
        </button>
      </div>
    </form>
  );
};
