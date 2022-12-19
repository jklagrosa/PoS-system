import React from "react";
import Marquee from "react-fast-marquee";
import Order from "./orders";

export default function OrderList() {
  return (
    <>
      <div className="py-1">
        <Marquee
          speed={0}
          gradient={false}
          pauseOnHover
          style={{ padding: "15px 0 20px 0" }}
        >
          <Order />
          <Order />
          <Order />
          <Order />
        </Marquee>
      </div>
    </>
  );
}
