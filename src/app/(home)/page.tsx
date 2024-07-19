import React from 'react'
import Link from 'next/link'

import { APP_TITLE } from '@/domain/constants/app'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={ styles.main }>
      <div className={ styles.title }>{APP_TITLE}</div>

      <Link href="/api-doc">API Documentation</Link>
    </main>
  )
}
