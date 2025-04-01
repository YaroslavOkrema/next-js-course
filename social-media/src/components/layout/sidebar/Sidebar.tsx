import Image from 'next/image';
import styles from './Sidebar.module.scss'
import Link from "next/link";
import { MessagesSquare, Phone, Settings, Sun, User2 } from "lucide-react";

export function Sidebar() {
    return <div className={styles.sidebar}>
        <Image src='/logo.svg' alt='Logo' width={100} height={100}/>
        <div>
            <Link href='/friends'>
                <User2 />
            </Link>
            <Link href='/call'>
                <Phone />
            </Link>
            <Link href='/chats'>
                <MessagesSquare />
            </Link>
            <Link href='/settings'>
                <Settings />
            </Link>
        </div>
        <Sun />
    </div>
}