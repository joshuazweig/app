import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import LoginHooks from '../components/LoginHooks';
// import LogoutHooks from '../components/LogoutHooks';
import React, { Component } from 'react';
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());


export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
        Ω
        </h1>

        <p className={styles.description}>
          Welcome to {' '}
          <code className={styles.code}>security</code>
        </p>

        <LoginHooks/>

        <div className={styles.grid}>
        <Link href="/home">
            <a className={styles.card} >
              <h2>Home &rarr;</h2>
              <p>
                Login to your instance of Ohm.
              </p>
            </a>
          </Link>

          <Link href="/check">
            <a className={styles.card} >
              <h2>Check &rarr;</h2>
              <p>
                Check if software you are running is vulnerable.
              </p>
            </a>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
