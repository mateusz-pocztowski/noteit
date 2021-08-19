import SEO from 'components/shared/SEO'
import Verify from 'components/layout/Homepage/Verify'

const VerifyPage = () => {
  return (
    <>
      <SEO title="Check your email" />
      <Verify
        title="Check your email"
        text="A sign in link has been sent to your email address."
      />
    </>
  )
}

export default VerifyPage
