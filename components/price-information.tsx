import { Info } from "lucide-react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Separator } from "./ui/separator";

export default function PriceInformation() {
    return (
        <div className="p-4 rounded-xl shadow mt-4 dark:shadow-gray-500">
            <h3 className="text-lg font-bold">Price Information</h3>
            <Separator className="mt-3" />
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-x-4 gap-y-4 mt-4">
                <div className="flex flex-col justify-center gap-y-2">
                    <Label htmlFor="price" className="text-gray-600">Price *</Label>
                    <Input type="text" placeholder="1" className="focus-visible:ring-0 focus-visible:ring-offset-0 dark:border-gray-600 bg-transparent" />
                </div>
                <div className="flex flex-col justify-center gap-y-2">
                    <Label htmlFor="total stock" className="text-gray-600">Total Stock</Label>
                    <Input type="text" placeholder="Ex: 10" className="focus-visible:ring-0 focus-visible:ring-offset-0 dark:border-gray-600 bg-transparent" />
                </div>
                <div className="flex flex-col justify-center gap-y-2">
                    <Label htmlFor="discount type" className="text-gray-600 flex gap-x-1">Discount Type * <Info className="h-4 w-4" /></Label>
                    <Select>
                        <SelectTrigger className="focus-visible:ring-0 focus-visible:ring-offset-0 text-gray-600 dark:border-gray-600 bg-transparent">
                            <SelectValue placeholder="Select Discount Type" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value="Percent (%)" className="text-gray-600 hover:text-gray-700">Percent (%)</SelectItem>
                                <SelectItem value="discount type 2" className="text-gray-600 hover:text-gray-700">Discount Type 2</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                <div className="flex flex-col justify-center gap-y-2">
                    <Label htmlFor="Discount" className="text-gray-600">Discount (%) *</Label>
                    <Input type="text" placeholder="0" className="focus-visible:ring-0 focus-visible:ring-offset-0 dark:border-gray-600 bg-transparent" />
                </div>
            </div>
        </div>
    );
}
