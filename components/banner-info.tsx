import { useRef } from "react";
import BannerImageUpload from "./banner-image-upload";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Plus } from 'lucide-react';

export default function BannerInfo() {
    const uploadRef = useRef<HTMLInputElement>(null);

    return (
        <>
            <h3 className="text-lg font-bold my-6">Banner Info</h3>
            <div className="flex flex-col gap-y-4 lg:flex-row gap-x-20 justify-between">
                <div className="w-full flex flex-col gap-y-4">
                    <div className="flex flex-col justify-center gap-y-2">
                        <Label htmlFor="title" className="text-gray-600">Title (Default)</Label>
                        <Input placeholder="Title" className="focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent dark:border-gray-600" />
                    </div>
                    <div className="flex flex-col justify-center gap-y-2">
                        <Label htmlFor="zone" className="text-gray-600">Zone</Label>
                        <Select>
                            <SelectTrigger className="focus-visible:ring-0 focus-visible:ring-offset-0 text-gray-600 bg-transparent dark:border-gray-600">
                                <SelectValue placeholder="Zone 1" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value="zone 1" className="text-gray-600 hover:text-gray-700">Zone 1</SelectItem>
                                    <SelectItem value="zone 2" className="text-gray-600 hover:text-gray-700">Zone 2</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="flex flex-col justify-center gap-y-2">
                        <Label htmlFor="banner type" className="text-gray-600">Banner Type</Label>
                        <Select>
                            <SelectTrigger className="focus-visible:ring-0 focus-visible:ring-offset-0 text-gray-600 bg-transparent dark:border-gray-600">
                                <SelectValue placeholder="Promotion" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value="promotion" className="text-gray-600 hover:text-gray-700">Promotion</SelectItem>
                                    <SelectItem value="promotion 2" className="text-gray-600 hover:text-gray-700">Promotion 2</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <BannerImageUpload />
            </div>
            <Label htmlFor="date" className="text-gray-600 block mt-6 mb-4">Date</Label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3">
                <Input placeholder="12/12/2024" className="focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent dark:border-gray-600" />
                <Input placeholder="14/12/2024" className="focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent dark:border-gray-600" />
                <Input placeholder="เพิ่มลิงค์ (ไม่จำเป็น)" className="focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent dark:border-gray-600" />
            </div>
            <div className="flex justify-end gap-x-4 items-center my-8">
                <button type="reset" className="px-10 py-2 rounded-md bg-gray-300 text-sm font-blod transition hover:bg-gray-400/70 dark:text-gray-700 dark:hover:bg-gray-400/95">Reset</button>
                <button type="submit" className="px-10 py-2 rounded-md bg-blue-600 text-sm font-blod transition hover:bg-blue-700 text-white">Submit</button>
            </div>
            <div className="flex justify-center mb-20">
                <div
                    onClick={() => uploadRef.current?.click()}
                    className="border border-dotted w-[300px] h-[170px] rounded-lg border-gray-400 flex items-center justify-center relative cursor-pointer hover:opacity-80 dark:border-gray-600"
                >
                    <Plus className="h-10 w-10 text-gray-600" />
                    <input type="file" className="hidden" name="upload" ref={uploadRef} />
                </div>
            </div>
        </>
    );
}
