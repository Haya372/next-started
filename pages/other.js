import Layout from '../components/layout';
import Link from 'next/link';

export default function Other(){
  const title = "Other";

  return (
    <div>
      <Layout header="Next.js" title="Other page." >
        <div className="card p-4 text-center">
          <h5 className="mb-4">これは、もう１つのページです。</h5>
          <Link href="." passHref>
            <button className="btn btn-primary">&lt;&lt; Back to Index page</button>
          </Link>
        </div>
      </Layout>
    </div>
  )
}