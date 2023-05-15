import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Divider, Stack, Modal, Fade } from "@mui/material";
import { CarForm } from "../CarForm";

export const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div
      id="modal-open"
      className="m-0 overflow-x-hidden p-0 text-[var(--text-color)]"
    >
      <div
        className={`absolute top-0 z-10 flex w-[100vw] items-center justify-between bg-gradient-to-t from-indigo-900 to-slate-950 px-0 py-[.5em] shadow-xl shadow-indigo-500/70`}
      >
        <h1 className="ml-[.5em] text-[1.5em] uppercase">
          <Link className="list-none font-bruno no-underline" to="/">
            Brand
          </Link>
        </h1>
        <ul className="mr-[8em] flex w-full list-none justify-center no-underline">
          <Stack
            direction="row"
            divider={
              <Divider
                color="var(--text-color)"
                orientation="vertical"
                flexItem
              />
            }
            spacing={2}
          >
            <li className="duration-300 hover:underline hover:decoration-sky-400 hover:decoration-wavy hover:underline-offset-4">
              <Link className="p-[1em] no-underline" to="/">
                Home
              </Link>
            </li>
            <li className="duration-300 hover:underline hover:decoration-sky-400 hover:decoration-wavy hover:underline-offset-4">
              <Link className="p-[1em] no-underline" to="/dashboard">
                Dashboard
              </Link>
            </li>
            <li className="duration-300 hover:underline hover:decoration-sky-400 hover:decoration-wavy hover:underline-offset-4">
              <Link className="p-[1em] no-underline" to="/login">
                Login
              </Link>
            </li>
          </Stack>
        </ul>
      </div>
      <div
        className={`relative my-[10vh] flex h-[80vh] w-[100vw] snap-center items-center justify-center self-center border border-x-transparent border-y-pink-200 bg-gray-900 bg-opacity-60 ${
          open ? "blur-2xl duration-300 " : ""
        }`}
      >
        <button
          onClick={handleOpen}
          className="font-xl mt-14 animate-tranceBg rounded-full px-10 py-3 font-montserrat tracking-widest hover:outline hover:outline-[var(--hover-color)]"
        >
          Add Car
        </button>
        <Modal
          open={open}
          onClose={handleClose}
          className="flex"
          style={{ overflow: "inherit" }}
          closeAfterTransition
        >
          <Fade in={open}>
            <div className="mx-auto h-fit w-fit animate-curl self-center px-28 py-14 text-[var(--text-color)]">
              <CarForm />
            </div>
          </Fade>
        </Modal>
      </div>
    </div>
  );
};
