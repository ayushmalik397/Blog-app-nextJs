import React from 'react'
import classes from './featured-post.module.css'
import PostsGrid from './post/post-grid'

function featuredPosts(props) {
    return (
        <section className={classes.lates}>
            <h2>Featured Post</h2>
            <PostsGrid posts={props.posts}/>
        </section>
    )
}

export default featuredPosts
