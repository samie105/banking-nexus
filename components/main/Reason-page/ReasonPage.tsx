"use client";
import { useColors } from "@/context/colorContext";
import React from "react";
import Privacy from "./Pricacy";
import Transparency from "./Transparency";
import Update from "./Update";
import Support from "./Support";
import Line from "./Line";
import Image from "next/image";
import { StickyScroll } from "@/components/ui/sticky-scoll";

export default function ReasonPage() {
  const content = [
    {
      title: "Private and Secured",
      description:
        "  At Wilson Investment Bank & Co, your privacy and securities are our top priorities. With state-of-the-art encryption technology, multi-factor authentication, and continuous monitoring, we ensure that your sensitive information and transactions are safeguarded atevery step.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src="/assets/privacywcu.png"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="size-5"
        >
          <path
            fillRule="evenodd"
            d="M9.661 2.237a.531.531 0 0 1 .678 0 11.947 11.947 0 0 0 7.078 2.749.5.5 0 0 1 .479.425c.069.52.104 1.05.104 1.59 0 5.162-3.26 9.563-7.834 11.256a.48.48 0 0 1-.332 0C5.26 16.564 2 12.163 2 7c0-.538.035-1.069.104-1.589a.5.5 0 0 1 .48-.425 11.947 11.947 0 0 0 7.077-2.75Zm4.196 5.954a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      title: "Transparency",
      description:
        " At Wilson Investment Bank & Co, transparency is paramount. We provide clear and concise information about our fees, terms. and policies, ensuring you have full visibility into your banking experience. Additionally, our dedicated team of professionals is committed to providing honest and reliable assistance whenever you need it.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src="/assets/transparencywcu.png"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="size-5"
        >
          <path d="M13.024 9.25c.47 0 .827-.433.637-.863a4 4 0 0 0-4.094-2.364c-.468.05-.665.576-.43.984l1.08 1.868a.75.75 0 0 0 .649.375h2.158ZM7.84 7.758c-.236-.408-.79-.5-1.068-.12A3.982 3.982 0 0 0 6 10c0 .884.287 1.7.772 2.363.278.38.832.287 1.068-.12l1.078-1.868a.75.75 0 0 0 0-.75L7.839 7.758ZM9.138 12.993c-.235.408-.039.934.43.984a4 4 0 0 0 4.094-2.364c.19-.43-.168-.863-.638-.863h-2.158a.75.75 0 0 0-.65.375l-1.078 1.868Z" />
          <path
            fillRule="evenodd"
            d="m14.13 4.347.644-1.117a.75.75 0 0 0-1.299-.75l-.644 1.116a6.954 6.954 0 0 0-2.081-.556V1.75a.75.75 0 0 0-1.5 0v1.29a6.954 6.954 0 0 0-2.081.556L6.525 2.48a.75.75 0 1 0-1.3.75l.645 1.117A7.04 7.04 0 0 0 4.347 5.87L3.23 5.225a.75.75 0 1 0-.75 1.3l1.116.644A6.954 6.954 0 0 0 3.04 9.25H1.75a.75.75 0 0 0 0 1.5h1.29c.078.733.27 1.433.556 2.081l-1.116.645a.75.75 0 1 0 .75 1.298l1.117-.644a7.04 7.04 0 0 0 1.523 1.523l-.645 1.117a.75.75 0 1 0 1.3.75l.644-1.116a6.954 6.954 0 0 0 2.081.556v1.29a.75.75 0 0 0 1.5 0v-1.29a6.954 6.954 0 0 0 2.081-.556l.645 1.116a.75.75 0 0 0 1.299-.75l-.645-1.117a7.042 7.042 0 0 0 1.523-1.523l1.117.644a.75.75 0 0 0 .75-1.298l-1.116-.645a6.954 6.954 0 0 0 .556-2.081h1.29a.75.75 0 0 0 0-1.5h-1.29a6.954 6.954 0 0 0-.556-2.081l1.116-.644a.75.75 0 0 0-.75-1.3l-1.117.645a7.04 7.04 0 0 0-1.524-1.523ZM10 4.5a5.475 5.475 0 0 0-2.781.754A5.527 5.527 0 0 0 5.22 7.277 5.475 5.475 0 0 0 4.5 10a5.475 5.475 0 0 0 .752 2.777 5.527 5.527 0 0 0 2.028 2.004c.802.458 1.73.719 2.72.719a5.474 5.474 0 0 0 2.78-.753 5.527 5.527 0 0 0 2.001-2.027c.458-.802.719-1.73.719-2.72a5.475 5.475 0 0 0-.753-2.78 5.528 5.528 0 0 0-2.028-2.002A5.475 5.475 0 0 0 10 4.5Z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      title: "Improvement and Innovation",
      description:
        " At Wilson Investment Bank & Co, we are committed to innovation and continuous improvement. Our cutting-edge technology and digital solutions are constantly evolving to meet the changing needs of our customers.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src="/assets/updatewcu.png"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="size-5"
        >
          <path
            fillRule="evenodd"
            d="M15.312 11.424a5.5 5.5 0 0 1-9.201 2.466l-.312-.311h2.433a.75.75 0 0 0 0-1.5H3.989a.75.75 0 0 0-.75.75v4.242a.75.75 0 0 0 1.5 0v-2.43l.31.31a7 7 0 0 0 11.712-3.138.75.75 0 0 0-1.449-.39Zm1.23-3.723a.75.75 0 0 0 .219-.53V2.929a.75.75 0 0 0-1.5 0V5.36l-.31-.31A7 7 0 0 0 3.239 8.188a.75.75 0 1 0 1.448.389A5.5 5.5 0 0 1 13.89 6.11l.311.31h-2.432a.75.75 0 0 0 0 1.5h4.243a.75.75 0 0 0 .53-.219Z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      title: "Responsive Support",
      description:
        "  At Wilson Investment Bank & Co, we prioritize customer satisfaction above all else. Our dedicated team is here to listen to your feedback, address your concerns, and provide personalized support every step of the way. Whether you have questions about your account, need assistance with a transaction, or want to explore new banking features, we’re here to help.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src="/assets/supportwcu.png"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="size-5"
        >
          <path
            fillRule="evenodd"
            d="M13.2 2.24a.75.75 0 0 0 .04 1.06l2.1 1.95H6.75a.75.75 0 0 0 0 1.5h8.59l-2.1 1.95a.75.75 0 1 0 1.02 1.1l3.5-3.25a.75.75 0 0 0 0-1.1l-3.5-3.25a.75.75 0 0 0-1.06.04Zm-6.4 8a.75.75 0 0 0-1.06-.04l-3.5 3.25a.75.75 0 0 0 0 1.1l3.5 3.25a.75.75 0 1 0 1.02-1.1l-2.1-1.95h8.59a.75.75 0 0 0 0-1.5H4.66l2.1-1.95a.75.75 0 0 0 .04-1.06Z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ];
  const colors = useColors();
  return (
    <div className="mt-14 /md:px-20 px-7 snap-start /bg-gray-100 py-8">
      <div className="text-cont md:text-center">
        {" "}
        <div className="flex text-xs mb-2 gap-3 md:justify-center ">
          {" "}
          <div
            className="register p-2 rounded-full font-bold flex items-center gap-2 cursor-pointer hover:bg-[#]"
            style={{
              background: colors.defaultblue + "10",
              color: colors.defaultblue,
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="size-5"
            >
              <path
                fillRule="evenodd"
                d="M16.403 12.652a3 3 0 0 0 0-5.304 3 3 0 0 0-3.75-3.751 3 3 0 0 0-5.305 0 3 3 0 0 0-3.751 3.75 3 3 0 0 0 0 5.305 3 3 0 0 0 3.75 3.751 3 3 0 0 0 5.305 0 3 3 0 0 0 3.751-3.75Zm-2.546-4.46a.75.75 0 0 0-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
                clipRule="evenodd"
              />
            </svg>

            <p>Why Trust Us</p>
          </div>
        </div>
        <div className="large-text text-2xl font-bold text-neutral-800">
          Why Choose Wilson Bank?
        </div>
        <div className="smaller-text text-neutral-600 md:px-32 text-sm font-medium mt-2 md:text-balance /px-5">
          At Wilson Bank, we prioritize the security and reliability of your
          financial endeavors. Our extensive portfolio, encompassing everything
          from savings and checking accounts to sophisticated mortgage
          solutions, is crafted to cater to your specific financial
          requirements. <br className="hidden md:block" />
        </div>
      </div>
      <Privacy />
      <Line />
      <Transparency />
      <Line />
      <Update />
      <Line />
      <Support />
      {/* <div className="pt-10">
        <StickyScroll content={content} />
      </div> */}
    </div>
  );
}
