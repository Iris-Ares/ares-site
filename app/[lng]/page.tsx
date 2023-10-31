
import styles from './page.module.css'
import { useTranslation } from '^app/i18n'

import Modal from '^lib/components/Modal'

export default async function Home({ params: { lng } }:any) {
  const { t } = await useTranslation(lng)
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <h1 style={{fontSize:60}}>Ares Wu</h1>
        <Modal />
      </div>
    </main>
  )
}
