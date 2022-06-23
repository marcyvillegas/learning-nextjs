// import { Fragment } from 'react';
import Link from 'next/link'

export default function News() {
    return (
        <div>
            <h1>News</h1>

            <ul>
                <li>
                    <Link href="/news/adsf">
                        News 1
                    </Link>
                </li>

                <li>
                    <Link href="/">
                        News 2
                    </Link>
                </li>
            </ul>
        </div>
    );
}