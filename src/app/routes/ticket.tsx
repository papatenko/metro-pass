import React from "react";
import Header from "@/components/header";
import Metro from "@/components/metro";
import Label from "@/components/label";
import ExpirationTime from "@/components/expiration-time";

const Ticket: React.FC = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-[#00496a]">
        <Header />
        <Metro />
        <Label />
        <footer className="flex flex-col font-Helvetica font-bold items-center gap-2 bg-accent text-white w-screen h-96">
          <ExpirationTime />
          <div className="text-xl">Ticket Expiration</div>
        </footer>
      </div>
    </>
  );
};

export default Ticket;
