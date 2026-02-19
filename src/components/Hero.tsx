import {useEffect, useRef} from "react";


const Hero = () => {

    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(()=> {

        if (videoRef.current) videoRef.current.playbackRate = 2;
    }, [])
    return (
        <section id="hero">
            <div>
                <h1>Hi, I'm Chinyere</h1>
                <img src="/title.png" alt="Macbook Title"/>
            </div>

            <video src="/videos/hero.mp4" autoPlay={true} muted={true} playsInline={true} ref={videoRef}/>

            <button>View my Work</button>
            <p>From 1499 or 1355 for 12 months</p>

        </section>
    )
}
export default Hero
