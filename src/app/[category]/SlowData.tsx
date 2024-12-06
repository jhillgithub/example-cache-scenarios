import { getDataSlow } from "@/data";
import React from "react";

const SlowData = async () => {
  const slowData = getDataSlow();
  return <h2>{slowData}</h2>;
};

export default SlowData;
