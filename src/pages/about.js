import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

import Footer from '../components/footer' //may remove later

const AboutPage = () => {
    return (
        <Layout>
            <h1>About</h1>
            <p>Dennis Clemente is a full stack developer with UX design-writing skills</p>
            <p><Link to="/contact">Want to work with me. Reach out.</Link></p>
        </Layout>
    )
}

export default AboutPage



