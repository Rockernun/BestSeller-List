import React from "react";
import Navigation from "../components/navigation";

export const metadata = {
  title: {
    template: "%s | New York Best Sellers!",
    default: "New York Best Sellers",
  },
  description: "New York Best Seller Explorer",
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
