"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import ItemUpdateDefault from "./item-update-default";

type SelectType = "default" | "english" | "thai";

export default function ItemUpdate() {
    const [type, setType] = useState<SelectType>("default");

    return (
        <div className="p-4 rounded-xl shadow mt-4 dark:shadow-gray-600">
            <div className="flex items-center gap-x-4">
                <button
                    onClick={() => setType("default")}
                    className={cn(
                        "text-md text-gray-600",
                        type === "default" && "border-b-2 border-b-blue-600 text-blue-600"
                    )}
                >
                    Default
                </button>
                <button
                    onClick={() => setType("english")}
                    className={cn(
                        "text-md text-gray-600",
                        type === "english" && "border-b-2 border-b-blue-600 text-blue-600"
                    )}
                >
                    English(EN)
                </button>
                <button
                    onClick={() => setType("thai")}
                    className={cn(
                        "text-md text-gray-600",
                        type === "thai" && "border-b-2 border-b-blue-600 text-blue-600"
                    )}
                >
                    Thai-ไทย(TH)
                </button>
            </div>
            {type === "default" ? (
                <ItemUpdateDefault />
            ) : type === "english" ? (
                <div>english</div>
            ) : (
                <div>thai</div>
            )}
        </div>
    );
}
