import { getData, getDataCached } from "@/data";
import { Suspense } from "react";
import SlowData from "./SlowData";

const category = async () => {
  const date = await getData();
  const cachedDate = await getDataCached();
  return (
    <div>
      <h1>category</h1>
      <h2>{date}</h2>
      <h2>{cachedDate}</h2>
      <Suspense fallback={"Loading..."}>
        <SlowData />
      </Suspense>
    </div>
  );
};

export default category;
