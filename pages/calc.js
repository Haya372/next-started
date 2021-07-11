import Layout from '../components/Layout';
import Calc from '../components/Calc';

export default function Home(){
  return (
    <div>
      <Layout header="Calc" title="Caluculator">
        <div className="text-center">
          <Calc />
        </div>
      </Layout>
    </div>
  )
}