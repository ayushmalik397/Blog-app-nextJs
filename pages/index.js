import React, { Fragment } from 'react'
import Head from 'next/head';
import Hero from '../components/hero'
import FeaturedPost from '../components/featured-posts'
import { getFeaturedPosts } from '../lib/posts-util'

function HomePage(props) {
    return (
        <Fragment>
            <Head>
                <title>Ayush' Blog</title>
                <meta name="description" content="I post about programming & web development"/>
            </Head>
            <Hero />
            <FeaturedPost posts={props.posts} />
        </Fragment>
    )
}

export function getStaticProps() {
    const featuredPosts =  getFeaturedPosts();

    return { 
        props: {
            posts: featuredPosts
        }
    }
}

export default HomePage
