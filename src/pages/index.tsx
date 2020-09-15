import React from 'react'
import Head from 'next/head'

import { Container, Image } from '../styles/Home/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>Home Page</Head>

      <Image />
      <h1>ReactJS Structure</h1>
      <p>A ReactJS + Next.js structure made by Rocketseat.</p>
    </Container>
  )
}

export default Home
