import { cache } from "react";
import { unstable_cache } from "next/cache";
export const getData = async () => {
  await new Promise((resolve) => setTimeout(resolve, 200));
  return `${new Date().toISOString()}`;
};
export const getDataSlow = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return `${new Date().toISOString()}`;
};
// export const getDataCached = unstable_cache(getData, ["somekey"], {
//   tags: ["date"],
// });

export const getDataCached = cache(
  unstable_cache(getData, ["somekey"], {
    tags: ["date"],
  })
);
