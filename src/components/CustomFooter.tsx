import React from "react";

export default function CustomFooter() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-grow">{/* Main content goes here */}</main>
      <footer className="bg-gray-800 py-6 text-white">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            © 2025 Amirul Asyraaf. All rights reserved.
          </p>
          <div className="mt-4">
            <a
              href="#"
              className="text-blue-400 transition duration-300 hover:text-blue-600"
            >
              Privacy Policy
            </a>
            {" | "}
            <a
              href="#"
              className="text-blue-400 transition duration-300 hover:text-blue-600"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
