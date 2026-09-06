import "./globals.css"
import { Header } from "../components/header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body className="min-h-screen bg-sky-50 dark:bg-zinc-900">
        <Header />
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}