import { getData } from "@/data";
import React from "react";

const ShowDate = async () => {
  const date = await getData();
  return (
    <div>
      <h1>ShowDate</h1>
      <h2>{date}</h2>
    </div>
  );
};

export default ShowDate;
