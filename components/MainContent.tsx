import { PropsWithChildren } from "react";
import styles from "../styles/Home.module.css"

type MainContentProps = PropsWithChildren & {asdf: string}

export default function MainContent(props: MainContentProps) {
  return (
    <main className={styles.main}>
      <div className={styles.mainmain}>
        {props.children}
      </div>
    </main>
  )
}