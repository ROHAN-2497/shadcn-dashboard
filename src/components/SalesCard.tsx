/* eslint-disable @next/next/no-img-element */
import React, { ReactElement } from "react";

export type SalesProps = {
  name: string;
  email: string;
  saleAmount: string;
};

export default function SalesCard(props: SalesProps) {
  return (
    <div className="flex flex-wrap justify-between gap-3">
      <section className="flex justify-between gap-3">
        <div className="w-12 h-12 rounded-full p-1 bg-gray-100">
          <img
            src={`https://api.dicebear.com/8.x/big-ears/svg?seed=${props.name}`}
            width={200}
            height={200}
            alt="avatar"
          />{" "}
        </div>
        <div className="text-sm">
          <p>{props.name}</p>
          <div className="text-ellipsis overflow-hidden whitespace-nowrap w-[120px] sm:w-auto text-gray-400">
            {props.email}
          </div>
        </div>
      </section>
      <p>{props.saleAmount}</p>
    </div>
  );
}
