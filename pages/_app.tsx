import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div className="font-Poppins">
            <Component {...pageProps} />
        </div>
    );
}

export default MyApp;
