import Hero from '../components/Home/Hero'
import Featured from '../components/Home/Featured'
import Video from '../components/Home/Video'
import Deals from '../components/Deals'
import Properties from '../components/Home/Properties'
import Contact from '../components/Home/Contact'

const Home = () => {
  return (
    <div id="Home">
      <Hero />
      <Featured />
      <Video />
      <Deals />
      <Properties />
      <Contact />
    </div>
  )
}

export default Home
