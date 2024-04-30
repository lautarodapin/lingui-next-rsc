'use client'
import {Trans} from '@lingui/macro';
import Link from 'next/link';

export default function Home() {
    return (
        <main>
            <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
                <Trans>Hello</Trans>
                <Link href={'/es-es'}>Es</Link>
                <Link href={'/en-us'}>en</Link>
            </div>
        </main>
    );
}
