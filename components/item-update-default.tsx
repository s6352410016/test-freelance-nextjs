import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import ItemImageUpload from "./item-image-upload";
import ItemThumbnailUpload from "./item-thumbnail-upload";

export default function ItemUpdateDefault() {
    return (
        <div className="mt-4 flex flex-col lg:flex-row items-center gap-x-4 gap-y-4">
            <div className="w-full flex flex-col justify-center gap-y-3">
                <Label htmlFor="name" className="text-gray-600">Name (Default)*</Label>
                <Input type="text" placeholder="New Item" className="focus-visible:ring-0 focus-visible:ring-offset-0 border-gray-300 bg-transparent dark:border-gray-600" />
                <Label htmlFor="short desc" className="text-gray-600">Short Description(Default)*</Label>
                <Textarea className="focus-visible:ring-0 focus-visible:ring-offset-0 border-gray-300 resize-none bg-transparent dark:border-gray-600" />
            </div>
            <div
                className="flex items-center gap-x-4"
            >
                <ItemImageUpload />
                <ItemThumbnailUpload />
            </div>
        </div>
    );
}
