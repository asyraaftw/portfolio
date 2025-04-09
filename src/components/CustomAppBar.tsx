import React from "react";

export default function CustomAppBar() {
  return (
    <>
      {/* Container to center header and make it responsive */}
      <div className="container mx-auto">
        <header className="flex items-center justify-between border-2 border-red-300 p-4">
          <div className="text-xl font-bold text-red-600">MyApp</div>
          😺
          <nav className="hidden gap-4 md:flex">
            <a href="#" className="hover:underline">
              project
            </a>
            <a href="#" className="hover:underline">
              services
            </a>
            <a href="#" className="hover:underline">
              contact
            </a>
            <a href="#" className="hover:underline">
              donate
            </a>
          </nav>
          💩
          <div className="md:flex">
            <button>
              <svg
                className="h-6 w-6 text-red-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </header>
      </div>
    </>
  );
}
