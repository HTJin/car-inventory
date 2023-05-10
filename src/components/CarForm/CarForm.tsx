import React, { useState } from "react";
import { useDispatch, useStore } from "react-redux";
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
import { makes, cars, years, vehicle_types } from "../../assets/data/carData";

interface CarFormProps {
  id?: string;
  data?: any;
}

export const CarForm = (props: CarFormProps) => {
  const dispatch = useDispatch();
  const store = useStore();
  const { register, handleSubmit } = useForm({});

  const [selectedMake, setSelectedMake] = useState<{
    id: number;
    name: string;
  } | null>(null);
  const [selectedModel, setSelectedModel] = useState<{
    id: number;
    name: string;
  } | null>(null);

  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedVehicleType, setSelectedVehicleType] = useState(null);

  const handleMakeChange = (value: any) => {
    setSelectedMake(value);
  };

  const handleModelChange = (value: any) => {
    setSelectedModel({
      id: parseInt(value.id),
      name: value.name,
    });
  };

  const handleYearChange = (value: any) => {
    setSelectedYear(value);
  };

  const handleVehicleTypeChange = (value: any) => {
    setSelectedVehicleType(value);
  };

  const getModels = () => {
    if (!selectedMake) return [];
    return cars.result.vehicles
      .filter((vehicle) => vehicle.name.startsWith(selectedMake.name))
      .map((vehicle, index) => ({
        id: index,
        name: vehicle.name.replace(selectedMake.name, "").trim(),
      }));
  };

  const onSubmit = async (data: any, event: any) => {
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
      await serverCalls.create(store.getState());
      window.location.reload();
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Combobox
        {...register("make")}
        name="make"
        placeholder="Select a make"
        items={makes.map((make, index) => ({ id: index, name: make }))}
        selectedItem={selectedMake}
        onChange={handleMakeChange}
      />
      <Combobox
        {...register("model")}
        name="model"
        placeholder="Select a model"
        items={getModels()}
        selectedItem={selectedModel}
        onChange={handleModelChange}
      />
      <Combobox
        {...register("year")}
        name="year"
        placeholder="Select a year"
        items={years.map((year, index) => ({
          id: index,
          name: year.toString(),
        }))}
        selectedItem={selectedYear}
        onChange={handleYearChange}
      />
      <Combobox
        {...register("vehicle_type")}
        name="vehicle_type"
        placeholder="Select a vehicle_type"
        items={vehicle_types.map((vehicle_type, index) => ({
          id: index,
          name: vehicle_type,
        }))}
        selectedItem={selectedVehicleType}
        onChange={handleVehicleTypeChange}
      />
      <button type="submit">{props.id ? "Update Car" : "Add Car"}</button>
    </form>
  );
};
