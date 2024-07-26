import React from "react";
import Navigation from "./components/navigation";

export const metadata = {
  title: "%s | Best Seller",
  description: "New York Times Best Seller",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
