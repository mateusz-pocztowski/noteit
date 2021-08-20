import Head from 'next/head'

interface Props {
  title?: string
}

const SEO: React.FC<Props> = ({ title }) => {
  const metaDescription = `The app to save your ideas and notes in safe space`
  const metaTitle = title ? `${title} | noteIT!` : 'noteIT!'

  return (
    <Head>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <title>{metaTitle}</title>
    </Head>
  )
}

export default SEO
