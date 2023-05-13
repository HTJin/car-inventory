import React from "react";
import { Link } from "react-router-dom";
import { Divider, Stack } from "@mui/material";
import { CarForm } from "../CarForm";

export const Dashboard = () => {
  return (
    <div className="p-0 m-0 text-[var(--text-color)]">
      <div className="fixed left-0 right-0 top-0 z-10 flex items-center justify-between bg-gradient-to-t from-indigo-900 to-slate-950 px-0 py-[.5em] shadow-xl shadow-indigo-500/70">
        <h1 className="ml-[.5em] text-[1.5em] uppercase">
          <Link className="list-none font-bruno no-underline" to="/">
            Brand
          </Link>
        </h1>
        <ul className="list-none no-underline flex justify-center w-full mr-[8em]">
          <Stack
            direction="row"
            divider={<Divider color="var(--text-color)" orientation="vertical" flexItem />}
            spacing={2}
          >
            <li className="duration-300 hover:underline hover:decoration-sky-400 hover:decoration-wavy hover:underline-offset-4">
              <Link className="p-[1em] no-underline" to="/">Home</Link>
            </li>
            <li className="duration-300 hover:underline hover:decoration-sky-400 hover:decoration-wavy hover:underline-offset-4">
              <Link className="p-[1em] no-underline" to="/dashboard">Dashboard</Link>
            </li>
            <li className="duration-300 hover:underline hover:decoration-sky-400 hover:decoration-wavy hover:underline-offset-4">
              <Link className="p-[1em] no-underline" to="/login">Login</Link>
            </li>
          </Stack>
        </ul>
      </div>
      <div className="relative my-[10vh] flex h-[80vh] snap-center items-center justify-center self-center border border-x-transparent border-y-pink-200 bg-gray-900 bg-opacity-60">
        <CarForm />
      </div>
    </div>
  );
};
