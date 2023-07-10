import { Nunito } from "next/font/google";

import type { Metadata } from "next";

import "@/styles/globals.css";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Airbnb Clone",
  description: "Rent your home or book hotels with comfort!",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <div>{children}</div>
      </body>
    </html>
  );
}
