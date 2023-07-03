import SubNavBar from "@/components/SubNavBar"
import "./globals.css"
import FooterComponent from "@/components/FooterComponent"
import HeaderComponent from "@/components/HeaderComponent"
export const metadata = {
  title: 'Thapathali campus',
  description: 'TCIOE',
}
import NavBarMenuItems from './NavBarMenuItems'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body>
        {/* <NavbarComponent /> */}
        <HeaderComponent menuItems={menuItems} />
        <main>{children}</main>
        <FooterComponent />
      </body>


    </html>
  )
}