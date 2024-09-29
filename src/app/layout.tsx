import { Children } from "react"
import { Providers } from "./providers"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {/* Layout UI */}

        <main>
          <Providers>
          {children}
          </Providers>
          </main>
      </body>
    </html>
  )
}
