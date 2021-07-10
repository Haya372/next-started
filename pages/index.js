import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


export default function Home() {

  let title = "Next.js page";
  let message = "React Next.js sample page";


  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" crossOrigin="anonymous" />
      </Head>

      <style jsx>{`
        h1 {
          textAlign: 'right',
          padding: '5px 15px'
        }

        p {
          textAlign: 'left',
          margin: '0px 5px',
          color: '#669',
          fontSize: '18pt'
        }

        h2 {
          textAlign: 'center',
          margin: '0px 5px',
          color: '#99d',
          fontSize: '24pt',
          fontWeight: 'bold'
        }
      `}</style>

      <h1 className="bg-primary text-white display-4">React</h1>
      <div className="container">
        <h2 className="my-3" id="subtitle">{title}</h2>
        <div className="alert alert-primary text-center">
          <p className="h5">{message}</p>
        </div>
      </div>
    </div>
  )
}
