import Logo from '../Logo/Logo'
import Nav from '../Nav/Nav'
import styles from '../Header/Header.module.css'

export default function Header() {
    return (
    <header>
        <div className={styles.flexContainer}>
        <Logo boxOn />
        <Nav />
    </div>
    </header>
    )
}