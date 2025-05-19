import { Layout } from './components/Layout'
import { AboutUs } from './components/sections/AboutUs'
import { Hero } from './components/sections/hero'
import { Services } from './components/sections/Services'

function App() {
  return(
    <Layout title="RandomAI">
        <Hero/>
        <Services/>
        <AboutUs/>
    </Layout>
  )
}

export default App