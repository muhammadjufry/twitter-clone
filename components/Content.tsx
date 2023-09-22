"use client";
import { IconCalendar, IconList, IconPhoto } from "@tabler/icons-react";
import Image from "next/image";
import React, { useState } from "react";

type Props = {};

function Content({}: Props) {
  const [text, setText] = useState("");
  const [textareaHeight, setTextareaHeight] = useState("auto"); // Default height is "auto"

  // Handle textarea input change
  const handleTextareaChange = (event: any) => {
    const textareaLineHeight = 24; // Adjust this based on your textarea's line-height
    const minRows = 1; // Minimum number of rows
    const maxRows = 5; // Maximum number of rows

    const previousRows = event.target.rows;
    event.target.rows = minRows; // Reset the rows to the minimum to calculate scrollHeight

    const currentRows = Math.floor(
      event.target.scrollHeight / textareaLineHeight
    );

    // Set the textarea's height within the specified range
    if (currentRows === maxRows) {
      event.target.rows = maxRows;
      setTextareaHeight(maxRows * textareaLineHeight + "px");
    } else {
      event.target.rows = currentRows < minRows ? minRows : currentRows;
      setTextareaHeight(event.target.scrollHeight + "px");
    }

    // Update the textarea content
    setText(event.target.value);

    // Check if the text is empty and reset the height
    if (event.target.value === "") {
      event.target.rows = minRows;
      setTextareaHeight("auto");
    }
  };
  return (
    <section className="lg:mx-[290px] mx-[91px] w-full lg:max-w-[587px]">
      <h1 className="text-xl font-semibold p-4">Home</h1>
      <ul className="flex items-center text-center gap-4 mt-4 border-b w-full">
        <li className="w-full flex flex-col gap-2 hover:bg-slate-100 cursor-pointer pt-4">
          <span>For you</span>
          <div className="w-10 mx-auto h-1 bg-sky-500"></div>
        </li>
        <li className="w-full flex flex-col gap-2 hover:bg-slate-100 cursor-pointer pt-4">
          <span>Following</span>
          <div className="w-10 mx-auto h-1 bg-transparent"></div>
        </li>
      </ul>

      <div className="py-4 flex items-start gap-2 border-r border-b p-4">
        <Image
          src="/profile.jpg"
          className="rounded-full"
          width={55}
          height={55}
          alt="profile"
        />
        <div className="w-full">
          <textarea
            className="outline-none text-xl px-4 py-2 resize-none w-full"
            placeholder="What is happening?!"
            value={text}
            onChange={handleTextareaChange}
            style={{ height: textareaHeight }}
          ></textarea>
          <ul className="flex items-center gap-4 mt-4 ml-4 text-sky-500 font-semibold">
            <li className="cursor-pointer">
              <IconPhoto size={23} />
            </li>
            <li className="cursor-pointer">
              <IconList size={23} />
            </li>
            <li className="cursor-pointer">
              <IconCalendar size={23} />
            </li>
            <li className="ml-auto">
              <button className="p-2 bg-sky-500 px-8 rounded-full text-md text-white">
                Post
              </button>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Content;
