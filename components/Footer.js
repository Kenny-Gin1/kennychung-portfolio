import styles from './styles/utils.module.css'
import layout from './styles/layout.module.css'

export default function Footer () {
    return (
        <div className={layout.footer}>
            <p className={styles.lightText}>Copyright © 2020, Created by Kenny Chung</p>
        </div>
    )
}