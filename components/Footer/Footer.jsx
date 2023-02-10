import Logo from '../Logo/Logo'
import styles from 'styles/Footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.wrapper}>
            <div className={styles.flexontainer}>
                <Logo />
            </div>
        </footer>
    )
}