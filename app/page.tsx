'use client'

import { useEffect } from 'react'
import React, { useState, ChangeEvent, KeyboardEvent } from 'react';
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { buttonVariants } from "@/components/ui/button";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";

export function TextareaWithButton(): JSX.Element {
  const [text, setText] = useState<string>(""); // State variable to store the current text
  const [history, setHistory] = useState<string[]>([]); // Specify the type as an array of strings

  const handleTextareaChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    setText(e.target.value); // Update the current text as the user types
  };

  const handleTextareaEnter = (e: KeyboardEvent<HTMLTextAreaElement>): void => {
    if (e.key === 'Enter' && text.trim() !== '') {
      e.preventDefault(); // Prevent the default Enter key behavior
      sendMessage();
    }
  };

  const sendMessage = (): void => {
    if (text.trim() !== '') {
      // When the user clicks Send or presses Enter and the text is not empty
      const updatedHistory = [...history, text];
      const limitedHistory = updatedHistory.slice(-5); // Limit to the most recent 5 messages
      setHistory(limitedHistory);
      setText(""); // Clear the current text
    }
  };

  return (
    <div className="grid w-full gap-2 relative">
      <div className="relative">
        <Textarea
          placeholder="Type your message here."
          value={text}
          onChange={handleTextareaChange}
          onKeyDown={handleTextareaEnter}
          className="w-full"
        />
        <Button
          onClick={sendMessage}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 h-10 bg-blue-500 text-white"
        >
          Send
        </Button>
      </div>
      <div className="history-scroll">
        {history.map((entry, index) => (
          <div key={index}>{entry}</div>
        ))}
      </div>
    </div>
  );
}


export function TextareaDemo(): JSX.Element {
  const [text, setText] = useState<string>(""); // State variable to store the current text
  const [history, setHistory] = useState<string[]>([]); // Specify the type as an array of strings

  const handleTextareaChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    setText(e.target.value); // Update the current text as the user types
  };

  const handleTextareaEnter = (e: KeyboardEvent<HTMLTextAreaElement>): void => {
    if (e.key === 'Enter' && text.trim() !== '') {
      e.preventDefault(); // Prevent the default Enter key behavior
      // When the user presses Enter and the text is not empty
      const updatedHistory = [...history, text];
      const limitedHistory = updatedHistory.slice(-5); // Limit to the most recent 5 messages
      setHistory(limitedHistory);
      setText(""); // Clear the current text
    }
  };

  return (
    <div className="grid w-full gap-2">
      <Textarea
        placeholder="Type patient's background here."
        value={text}
        onChange={handleTextareaChange}
        onKeyDown={handleTextareaEnter}
        className="w-full"
      />
      <div className="history-scroll">
        {history.map((entry, index) => (
          <div key={index}>{entry}</div>
        ))}
      </div>
    </div>
  );
}

export default function IndexPage() {
  return (
    <div className="relative min-h-screen">
      <Link href="/app/projectpage"> 
        <Button className="absolute top-0 left-0 m-4">New Project</Button>
      </Link> 
      <section className="container mx-auto pb-8 md:py-8">
        <div
          className="flex gap-2 justify-center items-center"
          style={{ flexDirection: "column" }}
        >
          <div style={{ marginTop: '40px', width: '80%' }}> 
            <TextareaDemo></TextareaDemo>
            <Separator className="bg-gray-300 h-1 w-full"></Separator>
            <TextareaWithButton />
          </div>
        </div>
      </section>
    </div>
  );
}