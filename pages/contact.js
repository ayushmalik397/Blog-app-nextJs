import React, { Fragment } from 'react'
import Head from 'next/head'
import ContactPage from '../components/contact/contact-form'

function contact() {
    return (
        <Fragment>
            <Head>
                <title>Contact me</title>
                <meta name="description" content="Send me your messages!" />
            </Head>
            <ContactPage/>
        </Fragment>
    )
}

export default contact
