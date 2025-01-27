import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const UpdateScore = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="bg-blue-900 text-white">
          Update
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Update Score</DialogTitle>
          {/* <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription> */}
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex justify-between items-center">
            <Label htmlFor="name" className="text-right">
              Update your Rank
            </Label>
            <Input
              id="name"
              type="number"
              min="0"
              max="100"
              required
              className="w-20"
            />
          </div>
          <div className="flex justify-between items-center">
            <Label htmlFor="username" className="text-right">
              Update Your Percentile
            </Label>
            <Input
              id="username"
              type="number"
              min="0"
              max="100"
              required
              className="w-20"
            />
          </div>
          <div className="flex justify-between items-center">
            <Label htmlFor="name" className="text-right">
              Update Your Current Score (out of 15)
            </Label>
            <Input
              id="name"
              type="number"
              min="0"
              max="15"
              required
              className="w-20"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateScore;
