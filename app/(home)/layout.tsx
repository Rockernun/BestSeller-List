import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1>The New York Times Best Seller Explorer</h1>
      {children}
    </div>
  );
}
