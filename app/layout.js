import { Navegation } from "./components/navegation"
import '../styles/globals.css'

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>
        <Navegation />
        {children}</body>
    </html>
  )
}
