import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./header";
import Analytics from "@/components/analytics";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    template: "%s | Rabbitcheese",
    default: "Rabbitcheese", // a default is required when creating a template
  },
  description: `📱Invite your friends to join RabbitCheese and turn them into your special bunny pals, aka "Reads" `,
  metadataBase: new URL("http://localhost:3000"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  openGraph: {
    title: "#rabbitcheese",
    description: `📱 Invite your friends to join RabbitCheese and turn them into your special bunny pals, aka "Reads"`,
    url: "/",
    images: "./og-image.png",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "#rabbitcheese",
    description: `📱 Invite your friends to join RabbitCheese and turn them into your special bunny pals, aka "Reads"`,
    images: ["./og-image.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "black",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head />
      <body className="relative min-h-screen bg-black bg-gradient-to-tr from-zinc-900/50 to-zinc-700/30">
        <Analytics />

        <Header />

        <main className=" min-h-[80vh] ">{children}</main>

        <footer className="inset-2x-0 bottom-0 border-t border-zinc-500/10">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-12 text-center text-xs text-zinc-700 lg:px-8">
            <p>
              Built by{" "}
              <Link
                href="#"
                className="font-semibold duration-150 hover:text-zinc-200"
              >
                @rabbitcheese_
              </Link>
              and{" "}
              <Link
                href="#"
                className="underline duration-150 hover:text-zinc-200"
              >
                many others{" "}
              </Link>
            </p>
            <p>
              Rabbitcheese is deployed on{" "}
              <Link
                target="_blank"
                href="https://vercel.com"
                className="underline duration-150 hover:text-zinc-200"
              >
                Vercel
              </Link>{" "}
              and uses{" "}
              <Link
                target="_blank"
                href="https://vtu.ng/"
                className="underline duration-150 hover:text-zinc-200"
              >
                VTU.ng
              </Link>{" "}
              for VTU
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
