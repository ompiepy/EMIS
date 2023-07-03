import { Inter } from "next/font/google";
import FooterComponent from "@/components/FooterComponent"
import HeaderComponent from "@/components/HeaderComponent"
import SubNavBar from "@/components/SubNavBar"

import { menuItems } from '@/utils/menuItems'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Department of Electronics and Computer Engineering",
  description:
    "DOECE ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <HeaderComponent menuItems={menuItems} />
        <main>{children}</main>
      <FooterComponent />
    </html>
  );
}