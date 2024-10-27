"use client";

import { useRef } from "react";
import { CloudUpload, SquarePen } from 'lucide-react';
import { Label } from "@/components/ui/label";

export default function BannerImageUpload() {
    const bannerImgRef = useRef<HTMLInputElement>(null);

    return (
        <div
            onClick={() => bannerImgRef.current?.click()}
            className="pr-16 flex flex-col gap-y-2">
            <Label htmlFor="name" className="text-gray-600">Banner Image *</Label>
            <div className="border border-dotted w-[170px] h-[170px] rounded-lg border-gray-300 flex items-center justify-center relative cursor-pointer hover:opacity-80 dark:border-gray-600">
                <CloudUpload className="h-14 w-14 text-gray-300" />
                <SquarePen className="h-5 w-5 text-blue-600 absolute top-2 right-2 cursor-pointer" />
                <input type="file" className="hidden" name="bannerImg" ref={bannerImgRef} />
            </div>
        </div>
    );
}