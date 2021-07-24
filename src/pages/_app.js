import "../../styles/globals.css";
import "tailwindcss/tailwind.css";
import { SearchProvider } from "../contexts/searchContext";

export default function MyApp({ Component, pageProps }) {
    return (
        <SearchProvider>
            <Component {...pageProps} />
        </SearchProvider>
    );
}
