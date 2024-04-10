// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { StaticImage } from 'gatsby-plugin-image'

// Step 2: Define your component
const HomePage = () => {
  return (
    <Layout pageTitle="Title - Home Page">
      <p>Child number 1</p>
      <p>Child number 2</p>
      <p>Child number 3</p>
      <p>Child number 4 ... I still find this a bit confusing</p>
      <StaticImage
        alt="Woof Woof"
        src="/Users/ryznerf/Documents/Projects/ryzner_hub/mvp/site/src/images/dog.jpeg"
      />
    </Layout>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <Seo title='Home Page' />

export default HomePage
