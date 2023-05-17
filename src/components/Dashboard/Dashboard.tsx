import { useState } from "react";
import { Modal, Fade } from "@mui/material";
import { CarForm } from "../CarForm";
import { CarsDisplay } from "../CarsDisplay";
import { NavBar } from "../shared/NavBar";

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
      <NavBar />
      <div
        className={`relative my-[10vh] flex h-[80vh] w-[100vw] snap-center items-center justify-center self-center border border-x-transparent border-y-pink-200 bg-gray-900 bg-opacity-60 ${
          open ? "blur-2xl duration-300 " : ""
        }`}
      >
        <div>
          <CarsDisplay handleOpen={handleOpen} />
        </div>
        <Modal
          open={open}
          onClose={handleClose}
          className="flex"
          style={{ overflow: "inherit" }}
          closeAfterTransition
        >
          <Fade in={open}>
            <div className="mx-auto h-fit w-fit animate-curl self-center px-28 py-14 text-[var(--text-color)] focus:outline-0">
              <CarForm />
            </div>
          </Fade>
        </Modal>
      </div>
    </div>
  );
};
