// import Head from "next/head";
// import Image from "next/image";
// import { Inter } from "@next/font/google";
// import styles from "../styles/Home.module.css";
// const inter = Inter({ subsets: ["latin"] });
import Nav from "../components/Nav";
import OrderList from "../components/OrderList";

export default function Home() {
  return (
    <>
      <Nav />
      <OrderList />
    </>
  );
}
