import Navbar from "@/components/ui/navbar";
import "./globals.css";
import { Nova_Slim, Nunito } from "next/font/google";
import Footer from "@/components/ui/footer";
import Main from "@/components/ui/main";
import { getServerSession } from "next-auth";

const nunito = Nunito({ subsets: ["latin"], display: "swap", variable: "--font-nunito" });
const nova = Nova_Slim({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-nova",
});

export const metadata = {
  title: "Critical Capture: Helpful feedback to level up your photography skills.",
  description: "Real feedback from real photographers.",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession();
  return (
    <html lang="en" className={`${nunito.variable} ${nova.variable}`}>
      <body className="bg-gradient-to-b from-purple-400 to-pink-200 min-h-screen text-gray-500">
        <Navbar />
        <Main session={session}>{children}</Main>
        {/* <main className="pt-10">{[children, session]}</main> */}
        <Footer />
      </body>
    </html>
  );
}
