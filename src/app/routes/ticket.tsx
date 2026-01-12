import React from "react";
import Header from "@/components/header";
import Label from "@/components/label";
import Footer from "@/components/footer";

function Ticket() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen gap-12 ">
        <Header />
        <Label />
        <Footer />
      </div>
    </>
  );
}

export default Ticket;
