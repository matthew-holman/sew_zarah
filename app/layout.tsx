import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "Sew Zarah",
    description: "Clothing repair assessments — send photos for an estimate.",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="scroll-smooth">
        <body
            className={`${inter.className} min-h-screen bg-jade-950 text-white antialiased`}
        >
        {children}
        </body>
        </html>
    );
}
