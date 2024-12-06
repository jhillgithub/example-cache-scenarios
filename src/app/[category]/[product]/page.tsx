import { Metadata } from "next";
import { getData, getDataCached } from "../../../data";
import Display from "./Display";
import ShowDate from "./ShowDate";

export const metadata: Metadata = {
  title: "Nested Page",
  description: "A statically rendered nested page with dynamic query handling.",
};

export function generateStaticParams() {
  const result = [];
  let currentCategory = 1;
  let currentProduct = 1;

  const count = 15;
  while (result.length < count) {
    const productsInCategory = Math.floor(Math.random() * 5) + 1;

    for (let i = 1; i <= productsInCategory && result.length < count; i++) {
      result.push({
        category: currentCategory.toString(),
        product: `${currentCategory}.${currentProduct}`,
      });
      currentProduct++;
    }

    currentCategory++;
    currentProduct = 1;
  }

  return result;
}

export default async function Product() {
  return (
    <div>
      <h1>
        <Display />
      </h1>
      <h2></h2>
      <h2>{await getData()}</h2>
      <h3>{await getDataCached()}</h3>
      <h3>{await getDataCached()}</h3>
      <ShowDate />
    </div>
  );
}
