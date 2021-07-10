import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

let title = "Next.js page";
let message = "React Next.js sample page";

export default function Home() {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" crossOrigin="anonymous" />
      </Head>

      <h1 className="bg-primary text-white display-4">React</h1>
      <div className="container">
        <h4 className="my-3">{title}</h4>
        <div className="alert alert-primary text-center">
          <p className="h5">{message}</p>
        </div>
      </div>
    </div>
  )
}
