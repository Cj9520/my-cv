import { useEffect, useState } from "react";
import Animatedletters from "../Animatedletters";
import Loader from "react-loaders";
import "./index.scss";

const Project = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)

        return () => {
            clearTimeout(timeoutId)
        }
    }, [])

    return (
        <>
        <div className="container project-page">
            <h1>
                <Animatedletters
                    letterClass={letterClass}
                    strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
                    idx={15}
                />
            </h1>
        </div>
        <Loader type="pacman" />
        </>
    )
}
export default Project