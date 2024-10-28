"use client";

import {
    Bell,
    Flag,
    Mail,
    Moon,
    User,
    Sun
} from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';

const subRoutes = [
    {
        icon: Moon,
        darkIcon: Sun,
    },
    {
        icon: Flag
    },
    {
        icon: Mail
    },
    {
        icon: Bell,
        dot: <div className="absolute -top-1 right-0 w-4 h-4 rounded-full bg-blue-200 flex items-center justify-center dark:bg-gray-400"><div className="w-2 h-2 bg-green-600 rounded-full" /></div>
    },
];


export default function SubRoutes({ style }: { style?: string; }) {
    const { setTheme, theme } = useTheme();

    return (
        <div className={cn(
            "hidden xl:flex items-center gap-x-4",
            style
        )}>
            {subRoutes.map(({ icon: Icon, darkIcon: DarkIcon, dot }, index) => {
                return dot ? (
                    <div
                        key={index}
                        className="relative p-3 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer trasition hover:bg-gray-200 duration-200 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                        <Icon className="h-5 w-5 dark:text-gray-400" />
                        {dot}
                    </div>
                ) : index === 0 ? (
                    <div
                        onClick={() => (theme === "system" || theme === "light") ? setTheme("dark") : setTheme("system")}
                        key={index}
                        className="relative p-3 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer trasition hover:bg-gray-200 duration-200 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                        {(theme === "system" || theme === "light") ? (
                            <Icon className="h-5 w-5 dark:text-gray-400" />
                        ) : DarkIcon && (
                            <DarkIcon className="h-5 w-5 dark:text-gray-400" />
                        )}
                    </div>
                ) : (
                    <div
                        key={index}
                        className="relative p-3 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer trasition hover:bg-gray-200 duration-200 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                        <Icon className="h-5 w-5 dark:text-gray-400" />
                    </div>
                );
            })}
            <Avatar className="cursor-pointer">
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>
                    <User className="h-5 w-5" />
                </AvatarFallback>
            </Avatar>
        </div>
    );
}
