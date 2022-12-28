import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from '@remix-run/react'
import type { MetaFunction, LinksFunction } from '@remix-run/node'
import { createTheme, ThemeProvider } from '@mui/material'

import tailwindUrl from './styles/tailwind.css'

export const links: LinksFunction = () => {
  return [
    { rel: 'stylesheet', href: tailwindUrl },
    {
      // https://www.w3schools.com/howto/howto_css_social_media_buttons.asp
      rel: 'stylesheet',
      href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'
    }
  ]
}

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Wordle of Warcraft',
  viewport: 'width=device-width,initial-scale=1'
})

export default function App() {
  // Material UI theme
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#90caf9'
      },
      secondary: {
        main: '#ce93d8'
      }
    }
  })

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="bg-[#181818] text-white font-mono">
        <ThemeProvider theme={darkTheme}>
          <Outlet />
        </ThemeProvider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
