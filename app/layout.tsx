import type { Metadata } from "next";
import { IBM_Plex_Sans} from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ClerkProvider, SignIn, UserButton} from "@clerk/nextjs";
import SignInPage from "./(auth)/sign-in/[[...sign-in]]/page";
import Layout from "./(auth)/layout";

const IBMPlex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ['400','500','600','700'],
  variable: '--font-ibm-plex',
});

export const metadata: Metadata = {
  title: "Imaginify",
  description: "AI-powered image generator.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) { 
  return (
      <ClerkProvider appearance={{variables: {colorPrimary: ''}}}>
    <html lang="en">
      <body
        className={cn("font-IBMPlex antialiased", IBMPlex.variable)}
        >
          <Layout>
            {children}
            {/* <SignInPage /> */}
            <UserButton />
          </Layout>
      </body>
    </html>
    </ClerkProvider>
  );
}
