import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fitrah Wahyudi | Portfolio",
  description:
    "Personal portfolio of Fitrah Wahyudi — Full Stack Developer passionate about building modern, scalable web applications.",
  keywords: ["Fitrah Wahyudi", "Full Stack Developer", "Portfolio", "Next.js", "React"],
  authors: [{ name: "Fitrah Wahyudi", url: "https://www.linkedin.com/in/fitwahyudii/" }],
  openGraph: {
    title: "Fitrah Wahyudi | Portfolio",
    description:
      "Personal portfolio of Fitrah Wahyudi — Full Stack Developer passionate about building modern, scalable web applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
