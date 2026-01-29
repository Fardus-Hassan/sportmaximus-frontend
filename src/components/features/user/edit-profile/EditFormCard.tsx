import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function EditFormCard() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold">Edit Profile</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="fullName" className="text-base font-normal">
              Full Name:
            </Label>
            <Input
              id="fullName"
              type="text"
              placeholder="Write here..."
              className="h-12 rounded-lg border-gray-300 placeholder:text-gray-400"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-base font-normal">
              Email:
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Write here..."
              className="h-12 rounded-lg border-gray-300 placeholder:text-gray-400"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="location" className="text-base font-normal">
              Location:
            </Label>
            <Input
              id="location"
              type="text"
              placeholder="Write here..."
              className="h-12 rounded-lg border-gray-300 placeholder:text-gray-400"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phoneNumber" className="text-base font-normal">
              Phone Number:
            </Label>
            <Input
              id="phoneNumber"
              type="tel"
              placeholder="Write here..."
              className="h-12 rounded-lg border-gray-300 placeholder:text-gray-400"
            />
          </div>
        </div>

        <div className="flex gap-3 pt-2">
          <Button
            type="button"
            variant="outline"
            className="h-12 px-8 rounded-lg border-gray-300 hover:bg-gray-50">
            Cancel
          </Button>
          <Button
            type="submit"
            className="h-12 px-8 rounded-lg bg-rose-600 hover:bg-rose-700 text-white">
            Save Changes
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
