import React from 'react'
import Link from 'next/link'
import classes from './post-item.module.css'
import Image from 'next/image'

function PostItem(props) {
    const { title, image, date, excerpt, slug } = props.post;

    const formattedDate = new Date(date).toLocaleDateString('en-US',{
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })

    const imgPath = `/images/posts/${slug}/${image}`;
    const linkPath = `/posts/${slug}`;
    console.log("IMG",imgPath)
    return (
        <li className={classes.post}>
            <Link href={linkPath}>
            <a>
                <div className={classes.image}><Image src={imgPath} alt="POSTER" height={300} width={300} layout="responsive" /></div>
                <div className={classes.content}>
                    <h3>{title}</h3>
                    <time>{formattedDate}</time>
                    <p>The Excerpt</p>
                </div>
            </a>
            </Link>
        </li>
    )
}

export default PostItem
