"use client";

import { ImagePlus } from 'lucide-react';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useState } from "react";
import { cn } from '@/lib/utils';
import BannerInfo from '@/components/banner-info';

type SelectType = "list" | "add new banner";

export default function BannerPage() {
    const [type, setType] = useState<SelectType>("add new banner");

    return (
        <div className="mt-5 px-2 md:px-0">
            <h1 className="text-xl font-bold flex gap-x-3"><ImagePlus className="h-6 w-6 text-gray-600" /> Banner</h1>
            <Breadcrumb className="mt-4">
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="#" className="text-blue-600 hover:text-blue-700">Application Manager</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/" className="text-blue-600 hover:text-blue-700">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/banner" className="text-blue-600 hover:text-blue-700">Banner</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage className="text-gray-600">Add New Banner</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            <div className="p-4 rounded-xl shadow mt-5 dark:shadow-gray-500">
                <div className="flex items-center gap-x-4">
                    <button
                        onClick={() => setType("list")}
                        className={cn(
                            "text-md text-gray-600",
                            type === "list" && "border-b-2 border-b-blue-600 text-blue-600"
                        )}
                    >
                        List
                    </button>
                    <button
                        onClick={() => setType("add new banner")}
                        className={cn(
                            "text-md text-gray-600",
                            type === "add new banner" && "border-b-2 border-b-blue-600 text-blue-600"
                        )}
                    >
                        Add New Banner
                    </button>
                </div>
                {type === "list" ? (
                    <div>list</div>
                ) : (
                    <BannerInfo />
                )}
            </div>
        </div>
    );
}
