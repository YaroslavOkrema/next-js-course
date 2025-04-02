import Image from 'next/image';
import styles from './Sidebar.module.scss'
import Link from "next/link";

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <Image src='/logo.svg' alt='Logo' priority width={50} height={50}/>
            <div>
                <Link href='/friends'>
                    Friends
                </Link>
                <Link href='/call'>
                    Call
                </Link>
                <Link href='/chats'>
                    Chats
                </Link>
                <Link href='/settings'>
                    Settings
                </Link>
            </div>
        </aside>
    )

}