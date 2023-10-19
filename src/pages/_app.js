import Header from '@/components/header/Header'
import '@/styles/globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
})


export default function App({ Component, pageProps }) {
	return (
		<>
         <main className={`main ${poppins.className}`}>
            <Header />
			   <Component {...pageProps} />
         </main>
		</>
	)
}
