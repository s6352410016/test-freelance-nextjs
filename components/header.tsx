import { AlignJustify } from 'lucide-react';
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from './ui/separator';
import MainRoutes from './main-routes';
import SubRoutes from './sub-routes';
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export default function Header() {
    return (
        <div className="fixed z-50 top-3 right-3 w-max xl:w-full xl:static bg-white shadow rounded-md flex items-center justify-between p-4 dark:bg-gray-900 dark:shadow-gray-600">
            <MainRoutes />
            <SubRoutes />
            <Sheet>
                <SheetTrigger className="w-full flex items-center justify-end xl:hidden cursor-pointer">
                    <AlignJustify className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                </SheetTrigger>
                <SheetContent className="dark:bg-gray-900">
                    <SheetHeader>
                        <SheetTitle className="text-center dark:text-gray-400">Navigation Menu</SheetTitle>
                    </SheetHeader>
                    <MainRoutes style="flex flex-col xl:hidden flex-wrap items-start gap-y-8 gap-x-8 cursor-pointer my-6" />
                    <Separator />
                    <ScrollArea>
                        <SubRoutes style="flex xl:hidden items-center gap-x-6 my-6" />
                        <ScrollBar orientation="horizontal" />
                    </ScrollArea>
                </SheetContent>
            </Sheet>
        </div>
    );
}
