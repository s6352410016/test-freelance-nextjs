import { cn } from '@/lib/utils';
import {
    FileText,
    House,
    RefreshCcw,
    Settings,
    User,
    ChevronDown
} from 'lucide-react';

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

export default function MainRoutes({ style }: { style?: string; }) {
    return (
        <div className={cn(
            "hidden xl:flex items-center gap-x-8 cursor-pointer",
            style
        )}>
            {mainRoutes.map(({ icon: Icon, title, endIcon: EndIcon }, index) => {
                return (
                    <div key={index} className="flex items-center gap-x-3 hover:opacity-85">
                        <Icon className="h-5 w-5 text-blue-600 dark:text-gray-400" />
                        <p className="text-sm text-semibold text-gray-600 dark:text-gray-400">{title}</p>
                        {EndIcon && <EndIcon className="h-6 w-6 text-blue-600 dark:text-gray-400" />}
                    </div>
                );
            })}
        </div>
    );
}
