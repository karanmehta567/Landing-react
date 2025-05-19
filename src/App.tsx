import { Layout } from './components/Layout'
import { Hero } from './components/sections/hero'
import { Services } from './components/sections/Services'

function App() {
  return(
    <Layout title="RandomAI">
        <Hero/>
        <Services/>
    </Layout>
  )
}

export default App