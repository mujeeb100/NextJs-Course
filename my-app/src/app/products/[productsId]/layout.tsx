import React from "react";

export default function ProdcutDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div>{children}</div>
      <h1>Product Details Layout</h1>
    </>
  );
}
