import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubItem,
    SidebarTrigger,
} from "@/components/ui/sidebar";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger
} from "@radix-ui/react-collapsible";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
    Search,
    House,
    ShoppingBasket,
    ShoppingCart,
    Layers2,
    Book,
    Image as ImageIcon,
    Images,
    TicketPercent,
    RotateCcw,
    Bell,
    ChevronDown,
    Waypoints,
    Grid2x2,
    Square
} from 'lucide-react';
import Image from "next/image";

export function AppSidebar() {
    return (
        <Sidebar className="p-2 bg-white">
            <SidebarHeader className="bg-white">
                <div className="flex flex-col justify-center">
                    <div className="flex justify-between items-center">
                        <Image
                            src="/logo.png"
                            width={120}
                            height={120}
                            alt="logo"
                        />
                        <SidebarTrigger />
                    </div>
                    <form className="border border-gray-400 rounded-md flex items-center gap-x-2 w-full h-[40px] mt-4 px-3 py-2">
                        <Search className="w-4 h-4" />
                        <input
                            type="text"
                            className="outline-none border-none w-3/4 text-sm"
                            placeholder="Search Menu..."
                        />
                    </form>
                </div>
            </SidebarHeader>
            <ScrollArea>
                <SidebarContent className="bg-white py-2">
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <SidebarMenuButton>
                                <div className="flex items-center gap-x-2 px-2">
                                    <House className="w-5 h-5 text-gray-500" />
                                    <p className="font-semibold text-gray-500">Dashboard</p>
                                </div>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                    <SidebarGroup>
                        <p className="text-gray-400 text-xs font-bold uppercase">pos section</p>
                        <SidebarMenuButton>
                            <div className="flex items-center gap-x-2">
                                <ShoppingBasket className="w-5 h-5 text-gray-500" />
                                <p className="font-semibold text-gray-500">New Sale</p>
                            </div>
                        </SidebarMenuButton>
                    </SidebarGroup>
                    <SidebarGroup>
                        <p className="text-gray-400 text-xs font-bold uppercase">order management</p>
                        <SidebarMenu>
                            <Collapsible defaultOpen className="group/collapsible">
                                <SidebarMenuItem>
                                    <CollapsibleTrigger asChild>
                                        <SidebarMenuButton>
                                            <div className="flex items-center gap-x-2 w-full">
                                                <ShoppingCart className="w-5 h-5 text-gray-500" />
                                                <p className="font-semibold text-gray-500">Orders</p>
                                                <ChevronDown className="w-5 h-5 ml-auto" />
                                            </div>
                                        </SidebarMenuButton>
                                    </CollapsibleTrigger>
                                    <CollapsibleContent>
                                        <SidebarMenuSub>
                                            <SidebarMenuSubItem>
                                                <SidebarMenuButton>
                                                    <p className="font-semibold text-gray-500">- All</p>
                                                </SidebarMenuButton>
                                                <SidebarMenuButton>
                                                    <p className="font-semibold text-gray-500">- Scheduled</p>
                                                </SidebarMenuButton>
                                                <SidebarMenuButton>
                                                    <p className="font-semibold text-gray-500">- Pending</p>
                                                </SidebarMenuButton>
                                                <SidebarMenuButton>
                                                    <p className="font-semibold text-gray-500">- Accepted</p>
                                                </SidebarMenuButton>
                                                <SidebarMenuButton>
                                                    <p className="font-semibold text-gray-500">- Processing</p>
                                                </SidebarMenuButton>
                                                <SidebarMenuButton>
                                                    <p className="font-semibold text-gray-500">- Order On The Way</p>
                                                </SidebarMenuButton>
                                                <SidebarMenuButton>
                                                    <p className="font-semibold text-gray-500">- Delivered</p>
                                                </SidebarMenuButton>
                                                <SidebarMenuButton>
                                                    <p className="font-semibold text-gray-500">- Canceled</p>
                                                </SidebarMenuButton>
                                                <SidebarMenuButton>
                                                    <p className="font-semibold text-gray-500">- Payment Failed</p>
                                                </SidebarMenuButton>
                                                <SidebarMenuButton>
                                                    <p className="font-semibold text-gray-500">- Refunded</p>
                                                </SidebarMenuButton>
                                                <SidebarMenuButton>
                                                    <p className="font-semibold text-gray-500">- Offline Payment</p>
                                                </SidebarMenuButton>
                                            </SidebarMenuSubItem>
                                        </SidebarMenuSub>
                                    </CollapsibleContent>
                                </SidebarMenuItem>
                            </Collapsible>
                        </SidebarMenu>
                        <SidebarMenu>
                            <Collapsible defaultOpen className="group/collapsible">
                                <SidebarMenuItem>
                                    <CollapsibleTrigger asChild>
                                        <SidebarMenuButton>
                                            <div className="flex items-center gap-x-2 w-full">
                                                <Book className="w-5 h-5 text-gray-500" />
                                                <p className="font-semibold text-gray-500">Orders Refunds</p>
                                                <ChevronDown className="w-5 h-5 ml-auto" />
                                            </div>
                                        </SidebarMenuButton>
                                    </CollapsibleTrigger>
                                    <CollapsibleContent>
                                        <SidebarMenuSub>
                                            <SidebarMenuSubItem>
                                                <SidebarMenuButton>
                                                    <p className="font-semibold text-gray-500">- Refund Request</p>
                                                </SidebarMenuButton>
                                            </SidebarMenuSubItem>
                                        </SidebarMenuSub>
                                    </CollapsibleContent>
                                </SidebarMenuItem>
                            </Collapsible>
                        </SidebarMenu>
                    </SidebarGroup>
                    <SidebarGroup>
                        <p className="text-gray-400 text-xs font-bold uppercase">promotion management</p>
                        <SidebarMenu>
                            <Collapsible defaultOpen className="group/collapsible">
                                <SidebarMenuItem>
                                    <CollapsibleTrigger asChild>
                                        <SidebarMenuButton>
                                            <div className="flex items-center gap-x-2 w-full">
                                                <Layers2 className="w-5 h-5 text-gray-500" />
                                                <p className="font-semibold text-gray-500">Campaigns</p>
                                                <ChevronDown className="w-5 h-5 ml-auto" />
                                            </div>
                                        </SidebarMenuButton>
                                    </CollapsibleTrigger>
                                    <CollapsibleContent>
                                        <SidebarMenuSub>
                                            <SidebarMenuSubItem>
                                                <SidebarMenuButton>
                                                    <p className="font-semibold text-gray-500">- Basic Campaigns</p>
                                                </SidebarMenuButton>
                                                <SidebarMenuButton>
                                                    <p className="font-semibold text-gray-500">- Item Campaigns</p>
                                                </SidebarMenuButton>
                                            </SidebarMenuSubItem>
                                        </SidebarMenuSub>
                                    </CollapsibleContent>
                                </SidebarMenuItem>
                            </Collapsible>
                        </SidebarMenu>
                        <SidebarMenuButton>
                            <div className="flex items-center gap-x-2">
                                <ImageIcon className="w-5 h-5 text-gray-500" />
                                <p className="font-semibold text-xs text-gray-500">Banners</p>
                            </div>
                        </SidebarMenuButton>
                        <SidebarMenuButton>
                            <div className="flex items-center gap-x-2">
                                <Images className="w-5 h-5 text-gray-500" />
                                <p className="font-semibold text-xs text-gray-500">Other Banners</p>
                            </div>
                        </SidebarMenuButton>
                        <SidebarMenuButton>
                            <div className="flex items-center gap-x-2">
                                <TicketPercent className="w-5 h-5 text-gray-500" />
                                <p className="font-semibold text-xs text-gray-500">Coupons</p>
                            </div>
                        </SidebarMenuButton>
                        <SidebarMenuButton>
                            <div className="flex items-center gap-x-2">
                                <RotateCcw className="w-5 h-5 text-gray-500" />
                                <p className="font-semibold text-xs text-gray-500">Cashback</p>
                            </div>
                        </SidebarMenuButton>
                        <SidebarMenuButton>
                            <div className="flex items-center gap-x-2">
                                <Bell className="w-5 h-5 text-gray-500" />
                                <p className="font-semibold text-xs text-gray-500">Push Notification</p>
                            </div>
                        </SidebarMenuButton>
                    </SidebarGroup>
                    <SidebarGroup>
                        <p className="text-gray-400 text-xs font-bold uppercase">product management</p>
                        <SidebarMenu>
                            <Collapsible defaultOpen className="group/collapsible">
                                <SidebarMenuItem>
                                    <CollapsibleTrigger asChild>
                                        <SidebarMenuButton>
                                            <div className="flex items-center gap-x-2 w-full">
                                                <Waypoints className="w-5 h-5 text-gray-500" />
                                                <p className="font-semibold text-gray-500">Categories</p>
                                                <ChevronDown className="w-5 h-5 ml-auto" />
                                            </div>
                                        </SidebarMenuButton>
                                    </CollapsibleTrigger>
                                    <CollapsibleContent>
                                        <SidebarMenuSub>
                                            <SidebarMenuSubItem>
                                                <SidebarMenuButton>
                                                    <p className="font-semibold text-gray-500">- Category</p>
                                                </SidebarMenuButton>
                                                <SidebarMenuButton>
                                                    <p className="font-semibold text-gray-500">- Sub Category</p>
                                                </SidebarMenuButton>
                                                <SidebarMenuButton>
                                                    <p className="font-semibold text-gray-500">- Bulk Import</p>
                                                </SidebarMenuButton>
                                                <SidebarMenuButton>
                                                    <p className="font-semibold text-gray-500">- Bulk Export</p>
                                                </SidebarMenuButton>
                                            </SidebarMenuSubItem>
                                        </SidebarMenuSub>
                                    </CollapsibleContent>
                                </SidebarMenuItem>
                            </Collapsible>
                        </SidebarMenu>
                        <SidebarMenuButton>
                            <div className="flex items-center gap-x-2">
                                <Grid2x2 className="w-5 h-5 text-gray-500" />
                                <p className="font-semibold text-xs text-gray-500">Arrtibutes</p>
                            </div>
                        </SidebarMenuButton>
                        <SidebarMenuButton>
                            <div className="flex items-center gap-x-2">
                                <Square className="w-5 h-5 text-gray-500" />
                                <p className="font-semibold text-xs text-gray-500">Units</p>
                            </div>
                        </SidebarMenuButton>
                        <SidebarMenuButton>
                            <div className="flex items-center gap-x-2">
                                <Square className="w-5 h-5 text-gray-500" />
                                <p className="font-semibold text-xs text-gray-500">Common Conditions</p>
                            </div>
                        </SidebarMenuButton>
                        <SidebarMenu>
                            <Collapsible defaultOpen className="group/collapsible">
                                <SidebarMenuItem>
                                    <CollapsibleTrigger asChild>
                                        <SidebarMenuButton>
                                            <div className="flex items-center gap-x-2 w-full">
                                                <Square className="w-5 h-5 text-gray-500" />
                                                <p className="font-semibold text-gray-500">Product Setup</p>
                                                <ChevronDown className="w-5 h-5 ml-auto" />
                                            </div>
                                        </SidebarMenuButton>
                                    </CollapsibleTrigger>
                                    <CollapsibleContent>
                                        <SidebarMenuSub>
                                            <SidebarMenuSubItem>
                                                <SidebarMenuButton>
                                                    <p className="font-semibold text-gray-500">- Add New</p>
                                                </SidebarMenuButton>
                                                <SidebarMenuButton>
                                                    <p className="font-semibold text-gray-500">- List</p>
                                                </SidebarMenuButton>
                                                <SidebarMenuButton>
                                                    <p className="font-semibold text-gray-500">- Product Gallery</p>
                                                </SidebarMenuButton>
                                                <SidebarMenuButton>
                                                    <p className="font-semibold text-gray-500">- Review</p>
                                                </SidebarMenuButton>
                                            </SidebarMenuSubItem>
                                        </SidebarMenuSub>
                                    </CollapsibleContent>
                                </SidebarMenuItem>
                            </Collapsible>
                        </SidebarMenu>
                    </SidebarGroup>
                </SidebarContent>
            </ScrollArea>
        </Sidebar>
    );
}
