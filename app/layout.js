"use client";
import { Provider } from "react-redux";
import "./globals.css";
import { Inter } from "next/font/google";
import { store } from "./reduxStore/store";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ToDo - Organize your tasks",
  description: "The ultimate task organazer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
}
