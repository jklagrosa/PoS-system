import "../styles/globals.css";
import "../styles/scrollbar.scss";
import type { AppProps } from "next/app";
import { Poppins } from "@next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: "400",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${poppins.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}
