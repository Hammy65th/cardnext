import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

import stylecard from "@/components/page.module.scss";

export default function Home() {
  return (

    <main>

      <section id={stylecard.cardContainer}>
        <div id={stylecard.card}></div>
      </section>


    </main>

  );
}
