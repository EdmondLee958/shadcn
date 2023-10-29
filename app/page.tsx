'use client'

import { useEffect } from 'react'
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { buttonVariants } from "@/components/ui/button";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";

export function TextareaWithButton() {
  return (
    <div className="grid w-full gap-2">
      <div className="relative">
        <Textarea
          placeholder="Type your prompt here."
          className="w-full"
        />
        <Button className="h-10 absolute right-4 top-1/2 transform -translate-y-1/2">Send</Button>
      </div>
    </div>
  );
}

export function TextareaDemo() {
  return <Textarea placeholder="Type patient's background here." />;
}

export default function IndexPage() {
  return (
    <section className="container mx-auto grid items-center gap-4 pb-8 pt-8 md:py-8">
      <div
        className="flex gap-2 justify-center items-center ml-8 mr-8"
        style={{ minHeight: "100vh", flexDirection: "column" }}
      >
        <TextareaDemo></TextareaDemo>
        <Separator className="bg-gray-300 h-1 w-full"></Separator>
        <TextareaWithButton />
      </div>
    </section>
  );
}
