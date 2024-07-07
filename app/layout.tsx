import type { Metadata } from "next";
import { Inter, Raleway } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import "animate.css";
import { ColorProvider } from "@/context/colorContext";
import { SignUpProvider } from "@/context/signUpFormContext";
const inter = Raleway({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SignUpProvider>
          <ColorProvider>
            <Toaster richColors position="top-center" />
            {children}
          </ColorProvider>
        </SignUpProvider>
      </body>
    </html>
  );
}
