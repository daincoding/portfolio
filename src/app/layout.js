import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className="mx-[12px] my-[15px] mb-[75px] min-w-[259px]">
        {children}
        </main>
      </body>
    </html>
  );
}
