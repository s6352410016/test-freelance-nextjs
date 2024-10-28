"use client";

import { MoveUp } from 'lucide-react';

export default function Footer() {
    return (
        <div className="flex items-center justify-center my-6">
            <p className="text-sm text-gray-600">© 2024. Telehealth thailand All rights reserved.</p>
            <div onClick={() => window.scrollTo({
                top: 0,
                behavior: "smooth"
            })} className="p-2 rounded-full border border-gray-600 flex items-center justify-center absolute z-50 bottom-5 right-5 cursor-pointer hover:opacity-80">
                <MoveUp className="h-5 w-5 text-gray-600" />
            </div>
        </div>
    );
}
