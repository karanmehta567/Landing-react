import { Footer } from './components/elements/Footer'
import { Layout } from './components/Layout'
import { AboutUs } from './components/sections/AboutUs'
import { Hero } from './components/sections/hero'
import { Pricing } from './components/sections/Pricing'
import { Services } from './components/sections/Services'

function App() {
  return(
    <Layout title="RandomAI">
        <Hero/>
        <Services/>
        <AboutUs/>
        <Pricing/>
        <Footer/>
    </Layout>
  )
}

export default App