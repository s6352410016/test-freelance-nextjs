import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Separator } from "./ui/separator";

export default function Attribute() {
    return (
        <div className="p-4 rounded-xl shadow mt-4 dark:shadow-gray-500">
            <h3 className="text-lg font-bold">Attribute</h3>
            <Separator className="mt-3 dark:bg-gray-600" />
            <div className="mt-4">
                <Label htmlFor="price" className="text-gray-600">Attribute</Label>
                <Input type="text" className="mt-1 focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent dark:border-gray-600" />
            </div>
        </div>
    );
}