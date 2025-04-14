import Logo from "@/app/_componets/Logo";
import Navigation from "@/app/_componets/Navigation";

import "@/app/_styles/globals.css";

import { Josefin_Sans } from "next/font/google";
import Header from "./_componets/Header";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  // title: "Wild Oasis ",
  title: {
    templete: "%s The Wild Oasis",
    default: "Welcome / The Wild Oasis",
  },
  description:
    "Lixurious cabin hotel, located in the hearth of the Italian Dolomites, surrounded by beatiful mountains and dark forests.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} antialiased bg-primary-950 text-primary-100 mix-h-screen flex flex-col`}
      >
        <Header />
        <div className="flex-1 px-8 py-12">
          <main className="max-w-7xl mx-auto">{children}</main>
        </div>
      </body>
    </html>
  );
}
