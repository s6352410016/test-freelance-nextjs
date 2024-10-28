"use client";

import { useRef } from "react";
import { CloudUpload, SquarePen } from 'lucide-react';
import { Label } from "@/components/ui/label";

export default function ItemImageUpload() {
    const itemImgRef = useRef<HTMLInputElement>(null);

    return (
        <div
            onClick={() => itemImgRef.current?.click()}
            className="flex flex-col justify-center gap-y-2">
            <Label htmlFor="name" className="text-gray-600 text-xs">Item Image * <span className="text-rose-500">(Ratio1:1)</span></Label>
            <div className="border border-dotted w-full sm:w-[170px] h-[170px] rounded-lg border-gray-300 flex items-center justify-center relative cursor-pointer hover:opacity-80 dark:border-gray-600">
                <CloudUpload className="h-14 w-14 text-gray-300" />
                <SquarePen className="h-5 w-5 text-blue-600 absolute top-2 right-2 cursor-pointer" />
                <input type="file" className="hidden" name="itemImg" ref={itemImgRef} />
            </div>
        </div>
    );
}