"use client";

import React, { useState } from "react";

interface CustomItem {
  customContent?: React.ReactNode;
}

export default function CustomContainer(props: CustomItem) {
  const [showAdditionalContent, setShowAdditionalContent] = useState(false);
  const { customContent } = props;
  console.log(customContent);

  const toggleContent = () => {
    setShowAdditionalContent((prev) => !prev);
  };

  return (
    <>
      <div className="container mx-auto mt-8">
        <div className="rounded-lg border-2 border-blue-500 p-6 shadow-md">
          <h1 className="text-4xl font-bold text-yellow-500">Amirul Asyraaf</h1>
          <h1 className="mt-2 text-2xl font-bold text-red-600">
            Software Engineer
          </h1>
          <p className="mt-8 font-serif text-lg text-gray-600">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>

          {/* Button to toggle additional content */}
          <div className="mt-6">
            <button
              className="rounded-full bg-blue-500 px-6 py-2 text-white transition hover:bg-blue-600"
              onClick={toggleContent}
            >
              {showAdditionalContent ? "Hide Details" : "Show More Details"}
            </button>
          </div>

          {showAdditionalContent && (
            <div className="mt-8 border-t-2 border-gray-300 p-4">
              <h2 className="text-2xl font-semibold text-gray-800">Waklu</h2>
              <p className="mt-4 text-lg text-gray-700">
                The standard chunk of Lorem Ipsum used since the 1500s is
                reproduced below for those interested. Sections 1.10.32 and
                1.10.33 from de Finibus Bonorum et Malorum by Cicero are also
                reproduced in their exact original form, accompanied by English
                versions from the 1914 translation by H. Rackham.
              </p>
            </div>
          )}

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2">
            <div className="rounded-lg bg-gray-800 p-4 text-red-600 shadow-sm">
              {customContent}
            </div>
            <div className="rounded-lg bg-gray-800 p-4 text-red-600 shadow-sm">
              {customContent}
            </div>
            {/* <div className="rounded-lg bg-gray-800 p-4 text-red-600 shadow-sm">
              {customContent}
            </div>
            <div className="rounded-lg bg-gray-800 p-4 text-red-600 shadow-sm">
              {customContent}
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
