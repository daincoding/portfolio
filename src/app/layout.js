import Sidebar from "@/components/sidebar/Sidebar";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>
          <Sidebar />
        {children}
        </main>
      </body>
    </html>
  );
}
