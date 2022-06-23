
import Link from 'next/link'
import css from "./Sidebar.module.css";

export default function Sidebar({ children }) {
    return (
        <div className={css.main_container}>

            <div className={css.sidebar_container}>
                <h3 m-2 >Sidebar</h3>

                <ul>
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
                </ul>
            </div>

            {children}
        </div>
    );
}