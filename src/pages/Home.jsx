import Header from '../components/Header.jsx'
import Hero from '../components/Hero.jsx'
import NavBar from '../components/NavBar.jsx'
import MenuCategories from '../components/MenuCategories.jsx'
import '../style/App.css'

const Home = () => {
    return(
        <>
        <Header/>
        <Hero/>
        <NavBar/>
        <MenuCategories/>
        </>
    )
}

export default Home