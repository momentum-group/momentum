import Head from 'next/head'
import '@/styles/tailwind.css'

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" type="image/x-icon" href="favicon.ico" />
                <title>Momentum</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Unbounded:wght@400;500;600;700;900&display=swap" rel="stylesheet"></link>
            </Head>
            <Component {...pageProps} />
        </>
    )
}
