import { useEffect, useState } from "react";
import { serverCalls } from "../../api";
import { useFetchData } from "../../hooks";
import { CarForm } from "../CarForm";
import { Link, useLocation } from "react-router-dom";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/20/solid";
import carkey from "../../assets/images/car-key.png";

interface displayData {
  data: {
    id?: string;
  };
}
interface CarsDisplayProps {
  handleOpen: () => void;
}

export const CarsDisplay = ({ handleOpen }: CarsDisplayProps) => {
  const { carData, getData } = useFetchData();
  const [isHovered, setIsHovered] = useState(false);
  const location = useLocation();
  const carToEdit = location.state?.carToEdit;

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const editCar = (id: string) => {
    if (carToEdit) {
      // This is where you would navigate to the CarForm component,
      // passing the carToEdit as a prop.
      // For example, using react-router's history object:
    }
  };

  const deleteCar = (id: string) => {
    serverCalls.delete(id).then(() => {
      getData();
    });
  };

  const myAuth = localStorage.getItem("myAuth");
  if (myAuth === "true") {
    if (carData.length === 0) {
      return (
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleOpen}
          className="flex cursor-pointer select-none flex-col items-center rounded-3xl border-4 border-dashed border-indigo-500 px-[10vw] py-[10vh]"
        >
          <img
            src={carkey}
            alt="Car Key"
            className={`h-24 w-24 ${isHovered ? "animate-bounce" : ""}`}
          />
          <h3 className="mt-2 text-sm font-semibold">No Car</h3>
          <button className="font-xl mt-4 animate-tranceBg rounded-full px-10 py-3 font-montserrat tracking-widest hover:outline hover:outline-[var(--hover-color)]">
            <span>Add Car</span>
          </button>
        </div>
      );
    } else {
      return (
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {carData.map((car: any) => (
            <li
              key={car.id}
              className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
            >
              <div className="flex flex-1 flex-col p-8">
                <img
                  className="mx-auto h-32 w-32 flex-shrink-0 rounded-full"
                  src={car.imageUrl}
                  alt=""
                />
                <h3 className="mt-6 text-sm font-medium text-gray-900">
                  {car.name}
                </h3>
                <dl className="mt-1 flex flex-grow flex-col justify-between">
                  <dt className="sr-only">Model</dt>
                  <dd className="text-sm text-gray-500">{car.model}</dd>
                  <dt className="sr-only">Year</dt>
                  <dd className="text-sm text-gray-500">{car.year}</dd>
                </dl>
              </div>
              <div>
                <div className="-mt-px flex divide-x divide-gray-200">
                  <div className="flex w-0 flex-1">
                    <Link
                      to={`/edit/${car.id}`}
                      onClick={() => editCar(car.id)}
                      className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                    >
                      <PencilSquareIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      Edit
                    </Link>
                  </div>
                  <div className="-ml-px flex w-0 flex-1">
                    <button
                      onClick={() => deleteCar(car.id)}
                      className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                    >
                      <TrashIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      );
    }
  } else {
    return (
      <div className="flex flex-col items-center">
        <h3 className="ml-[1.5ch] text-lg">Hey now, you're not logged in 😮</h3>
        <div className="mt-8 flex flex-col items-center justify-center">
          <Link
            className="font-xl animate-tranceBg rounded-full px-5 py-3 font-montserrat hover:outline hover:outline-[var(--hover-color)]"
            to={"/login"}
          >
            Log Me In!
          </Link>
          <div className="relative flex justify-center py-4 text-sm font-medium">
            <div
              className="relative inset-0 flex items-center"
              aria-hidden="true"
            >
              <div className="w-10 border-t border-gray-200" />
            </div>
            <span className="bg-transparent px-4 text-[var(--text-color)]">
              Or
            </span>
            <div
              className="relative inset-0 flex items-center"
              aria-hidden="true"
            >
              <div className="w-10 border-t border-gray-200" />
            </div>
          </div>
          <Link
            className="font-xl animate-tranceBg rounded-full px-5 py-3 font-montserrat hover:outline hover:outline-[var(--hover-color)]"
            to={"/register"}
          >
            Register Me!
          </Link>
        </div>
      </div>
    );
  }
};
