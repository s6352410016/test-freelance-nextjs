import {
    Bell,
    FileText,
    Flag,
    House,
    Mail,
    Moon,
    RefreshCcw,
    Settings,
    User,
    ChevronDown
} from 'lucide-react';
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar";

const mainRoutes = [
    {
        icon: House,
        title: "Dashboard"
    },
    {
        icon: User,
        title: "User"
    },
    {
        icon: FileText,
        title: "Transactions & Reports"
    },
    {
        icon: Settings,
        title: "Settings",
        endIcon: ChevronDown
    },
    {
        icon: RefreshCcw,
        title: "Dispatch Management"
    },
];

const subRoutes = [
    {
        icon: Moon
    },
    {
        icon: Flag
    },
    {
        icon: Mail
    },
    {
        icon: Bell,
        dot: <div className="absolute -top-1 right-0 w-4 h-4 rounded-full bg-blue-200 flex items-center justify-center"><div className="w-2 h-2 bg-green-600 rounded-full" /></div>
    },
];

export default function Header() {
    return (
        <div className="w-full shadow rounded-md flex items-center justify-between px-4 py-4">
            <div className="flex flex-wrap items-center gap-x-8 cursor-pointer">
                {mainRoutes.map(({ icon: Icon, title, endIcon: EndIcon }, index) => {
                    return EndIcon ? (
                        <div key={index} className="flex items-center gap-x-3 hover:opacity-85">
                            <Icon className="h-5 w-5 text-blue-600" />
                            <p className="text-sm text-semibold text-gray-600">{title}</p>
                            <EndIcon className="h-6 w-6 text-blue-600" />
                        </div>
                    ) : (
                        <div key={index} className="flex items-center gap-x-3 hover:opacity-85">
                            <Icon className="h-5 w-5 text-blue-600" />
                            <p className="text-sm text-semibold text-gray-600">{title}</p>
                        </div>
                    )
                })}
            </div>
            <div className="hidden xl:flex items-center gap-x-4">
                {subRoutes.map(({ icon: Icon, dot }, index) => {
                    return dot ? (
                        <div key={index} className="relative w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer trasition hover:bg-gray-200 duration-200">
                            <Icon className="h-5 w-5" />
                            {dot}
                        </div>
                    ) : (
                        <div key={index} className="relative w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer trasition hover:bg-gray-200 duration-200">
                            <Icon className="h-5 w-5" />
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
        </div>
    );
}
