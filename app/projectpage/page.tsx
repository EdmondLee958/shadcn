import React from 'react';
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link";
import { siteConfig } from "@/config/site";

export function DialogDemo() {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Edit Project</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit Project</DialogTitle>
            <DialogDescription>
              Make changes to your project here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="projectname" className="text-right">
                Project Name
              </Label>
              <Input
                id="ProjectName"
                defaultValue="New Project"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="projectdesc" className="text-right">
                Project Description
              </Label>
              <Input
                id="projectdesc"
                defaultValue=""
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    )
  }


export default function ProjectPage() {
  return (
    <div className="relative min-h-screen">
            <section className="container mx-auto pb-8 md:py-8">
        <div
          className="flex gap-2 justify-center items-center"
          style={{ flexDirection: "column" }}
        >
          <div style={{ marginTop: '40px', width: '80%' }}> 
            <DialogDemo></DialogDemo>
          </div>
        </div>
      </section>
    </div>
  );
};

