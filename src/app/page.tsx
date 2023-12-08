import Image from "next/image";
import styles from "./page.module.css";

import { Button } from "antd";

export default function Home() {
  return (
    <main className={styles.main}>
      <Button type="primary">Button</Button>

      <p>Instantly deploy your Next.js site to a shareable URL with Vercel.</p>
    </main>
  );
}
