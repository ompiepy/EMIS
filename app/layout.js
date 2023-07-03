import "./globals.css"
import FooterComponent from "@/components/FooterComponent"
export const metadata = {
  title: 'Thapathali campus',
  description: 'TCIOE',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body>
        <main>{children}</main>
      </body>


    </html>
  )
}