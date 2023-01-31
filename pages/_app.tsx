import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import '../styles/post.css'
import { Archivo } from '@next/font/google'
import '../public/fonts/flaticons/flaticon.css'

// const archivo = Archivo({ subsets: ["latin"] });



export default function App({ Component, pageProps }: AppProps) {
  
    return (
      <RecoilRoot>
        {/* <style jsx global>{`
        html {
          font-family: ${archivo.style.fontFamily};
        }
      `}</style> */}
        <Component {...pageProps} />
      </RecoilRoot>
    )
  
}
