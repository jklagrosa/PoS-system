import React from "react";
import Marquee from "react-fast-marquee";
import Order from "./orders";

export default function OrderList() {
  return (
    <>
      <div className="py-4">
        <Marquee speed={100} gradient={false} pauseOnHover>
          <Order />
        </Marquee>
      </div>
    </>
  );
}
