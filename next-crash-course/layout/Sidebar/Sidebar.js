
import Link from 'next/link'
import css from "./Sidebar.module.css";

export default function Sidebar({ children }) {
    return (
        <div className={css.main_container}>

            <div className={css.sidebar_container}>
                <h3>Sidebar</h3>

                <div className={css.list}>
                    <li>
                        <Link href="/">
                            Root
                        </Link>
                    </li>

                    <li>
                        <Link href="/dashboard">
                            Dashboard
                        </Link>
                    </li>

                    <li>
                        <Link href="/users">
                            Users
                        </Link>
                    </li>
                </div>

            </div>

            {children}
        </div>
    );
}