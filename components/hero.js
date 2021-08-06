import React from 'react'
import classes from './hero.module.css'
import Image from 'next/image'

function Hero() {
    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image src="/images/site/dp.jpg" alt="MAX" width={300} height={300}/>
            </div>
            <h1>Hi I'm Ayush</h1>
            <p>I blog about Frontend</p>
        </section>
    )
}

export default Hero
