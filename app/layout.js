import Providers from './Providers'
import { openSans } from './fonts'


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
