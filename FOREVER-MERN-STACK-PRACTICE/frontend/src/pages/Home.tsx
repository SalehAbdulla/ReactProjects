import BestSellers from "../components/BestSellers"
import Hero from "../components/Hero"
import LatestCollection from "../components/LatestCollection"
import NewsLetterBox from "../components/NewsLetterBox"
import Ourpolicy from "../components/Ourpolicy"

const Home = () => {
  return (
    <div >
      <Hero />
      <LatestCollection />
      <BestSellers />
      <Ourpolicy />
      <NewsLetterBox />
    </div>
  )
}

export default Home
