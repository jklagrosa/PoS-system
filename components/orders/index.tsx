import React from "react";

export default function Order() {
  return (
    <>
      <div className="bg-[var(--white)] w-[250px] min-h-[100px] py-2 px-4 border-l-2 border-green-700 flex items-center justify-between">
        <div>
          <h3 className="marqueeH3">Table number</h3>
          <h1 className="marqueeH1">07</h1>
        </div>
        <div className="ml-4">
          <h2 className="preparingFood">Preparing</h2>
          <h2 className="marqueeH2">2 Items</h2>
          <h2 className="marqueeH2">PHP300.00</h2>
        </div>
      </div>
    </>
  );
}
