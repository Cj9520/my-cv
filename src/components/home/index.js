
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Animatedletters from '../Animatedletters'
// import LogoTitle from '../../assets/images/C.png'
import './index.scss'
// import Logo from './Logo'
import Loader from 'react-loaders'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const HArray = ['H', 'i', ',', ' ']
    const nameArray = ['I', "'", 'm', ' ', 'C', 'h', 'i', 'r', 'a', 'g', ' ', 'J', 'i', 'n', 'd', 'a', 'l', ' ']
    const jobArray = [
        'w',
        'e',
        'b',
        ' ',
        'd',
        'e',
        'v',
        'e',
        'l',
        'o',
        'p',
        'e',
        'r',
        '.',
    ]

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)

        // Return a cleanup function to clear the timeout
        return () => {
            clearTimeout(timeoutId)
        }
    }, [])




    return (
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1 className='start-tag'>

                        {/* <img
                            src={LogoTitle}
                            alt="JavaScript Developer Name, Web Developer Name"
                        /> */}
                        
                            <span>
                                <Animatedletters
                                    letterClass={letterClass}
                                    strArray={HArray}
                                    idx={11}
                                /></span>
                        </h1>
                        {/* <br /> */}
                        <h1 className='no-tags'>
                            <span>
                                <Animatedletters
                                    letterClass={letterClass}
                                    strArray={nameArray}
                                    idx={18}
                                /></span>
                        </h1>

                        {/* <br /> */}
                        <h1 className='end-tag'>
                            <span>
                                <Animatedletters
                                    letterClass={letterClass}
                                    strArray={jobArray}
                                    idx={32}
                                /></span>
                        </h1>

                    <h2>Front End Developer / JavaScript Expert / Student at IIT Kharagpur</h2>
                    <Link to="/contact" className="flat-button">
                        CONTACT ME
                    </Link>
                </div>
                {/* <Logo /> */}
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Home
