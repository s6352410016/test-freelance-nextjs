"use client";

import { Separator } from "./ui/separator";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Info } from 'lucide-react';
import { Input } from "./ui/input";

export default function ItemDetails() {
    return (
        <div className="p-4 rounded-xl shadow mt-4 dark:shadow-gray-600">
            <h3 className="text-lg font-bold">Item details</h3>
            <Separator className="mt-3 dark:bg-gray-600" />
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-x-4 gap-y-4 mt-4">
                <div className="flex flex-col justify-center gap-y-2">
                    <Label htmlFor="store" className="text-gray-600">Store *</Label>
                    <Select>
                        <SelectTrigger className="focus-visible:ring-0 focus-visible:ring-offset-0 text-gray-600 dark:border-gray-600 bg-transparent">
                            <SelectValue placeholder="Select store" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value="Store 1" className="text-gray-600 hover:text-gray-700">Store 1</SelectItem>
                                <SelectItem value="Store 2" className="text-gray-600 hover:text-gray-700">Store 2</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                <div className="flex flex-col justify-center gap-y-2">
                    <Label htmlFor="category" className="text-gray-600">Category *</Label>
                    <Select>
                        <SelectTrigger className="focus-visible:ring-0 focus-visible:ring-offset-0 text-gray-600 dark:border-gray-600 bg-transparent">
                            <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value="category 1" className="text-gray-600 hover:text-gray-700">category 1</SelectItem>
                                <SelectItem value="category 2" className="text-gray-600 hover:text-gray-700">category 2</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                <div className="flex flex-col justify-center gap-y-2">
                    <Label htmlFor="sub category" className="text-gray-600 flex gap-x-1">Sub Category <Info className="h-4 w-4" /></Label>
                    <Select>
                        <SelectTrigger className="focus-visible:ring-0 focus-visible:ring-offset-0 text-gray-600 dark:border-gray-600 bg-transparent">
                            <SelectValue placeholder="Select Sub Category" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value="Sub Category 1" className="text-gray-600 hover:text-gray-700">Sub Category 1</SelectItem>
                                <SelectItem value="Sub Category 2" className="text-gray-600 hover:text-gray-700">Sub Category 2</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                <div className="flex flex-col justify-center gap-y-2">
                    <Label htmlFor="suitable for" className="text-gray-600">Suitable For</Label>
                    <Select>
                        <SelectTrigger className="focus-visible:ring-0 focus-visible:ring-offset-0 text-gray-600 dark:border-gray-600 bg-transparent">
                            <SelectValue placeholder="Select Condition" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value="Condition 1" className="text-gray-600 hover:text-gray-700">Condition 1</SelectItem>
                                <SelectItem value="Condition 2" className="text-gray-600 hover:text-gray-700">Condition 2</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                <div className="flex flex-col justify-center gap-y-2">
                    <Label htmlFor="unit" className="text-gray-600">Unit</Label>
                    <Select>
                        <SelectTrigger className="focus-visible:ring-0 focus-visible:ring-offset-0 text-gray-600 dark:border-gray-600 bg-transparent">
                            <SelectValue placeholder="Select Unit" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value="แผง" className="text-gray-600 hover:text-gray-700">แผง</SelectItem>
                                <SelectItem value="unit 2" className="text-gray-600 hover:text-gray-700">Unit 2</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                <div className="flex flex-col justify-center gap-y-2">
                    <Label htmlFor="maximum purchase quantity limit" className="text-gray-600 flex gap-x-1">Maximum Purchase Quantity Limit <Info className="h-4 w-4" /></Label>
                    <Input type="text" placeholder="Ex: 0" className="focus-visible:ring-0 focus-visible:ring-offset-0 dark:border-gray-600 bg-transparent" />
                </div>
                <div className="flex items-center justify-center gap-x-2">
                    <Checkbox id="is basic medicine" />
                    <Label htmlFor="is basic medicine" className="text-gray-600">Is Basic Medicine</Label>
                </div>
                <div className="flex items-center justify-center gap-x-2">
                    <Checkbox id="is prescription required" />
                    <Label htmlFor="is prescription required" className="text-gray-600">Is Prescription Required</Label>
                </div>
            </div>
        </div>
    );
}
