import Navbar from '../../navbar/navbar'
import styles from './layouthome.module.scss'

const LayoutHome = ({ children }: any) => {
  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        @2020 Sebastián. All rights reserved.
      </footer>
    </div>
  )
}

export default LayoutHome
