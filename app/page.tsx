import Attribute from "@/components/attribute";
import ItemDetails from "@/components/item-details";
import ItemUpdate from "@/components/Item-update";
import PriceInformation from "@/components/price-information";
import Tags from "@/components/tags";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mt-5 px-2 md:px-0">
      <h1 className="text-xl font-bold">Item Update</h1>
      <Link href="/banner" className="w-max text-blue-600 hover:text-blue-700 text-sm block mt-2">Go To Banner Page</Link>
      <ItemUpdate />
      <ItemDetails />
      <PriceInformation />
      <Attribute />
      <Tags />
      <div className="flex justify-end gap-x-4 items-center my-8">
        <button type="reset" className="px-10 py-2 rounded-md bg-gray-300 text-sm font-blod transition hover:bg-gray-400/70 dark:text-gray-700 dark:hover:bg-gray-400/95">Reset</button>
        <button type="submit" className="px-10 py-2 rounded-md bg-blue-600 text-sm font-blod transition hover:bg-blue-700 text-white">Submit</button>
      </div>
    </div>
  );
}
