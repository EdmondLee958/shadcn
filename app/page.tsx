import Link from "next/link"
import { siteConfig } from "@/config/site"

import { buttonVariants } from "@/components/ui/button"
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea"


export function TextareaWithButton() {
  return (
    <div className="grid w-full gap-2">
      <Textarea placeholder="Type your prompt here." />
      <Button>Send message</Button>
    </div>
  )
}

export function TextareaDemo() {
  return <Textarea placeholder="Type patient's background here." />
}


export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex gap-4 justify-center items-center" style={{ minHeight: '100vh', flexDirection: 'column' }}>
        <TextareaDemo></TextareaDemo>
        <TextareaWithButton />

      </div>
    </section>
  );
};
