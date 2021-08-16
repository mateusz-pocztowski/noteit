import Link from 'next/link'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  font-weight: 700;
  font-size: 8rem;
  a {
    color: ${({ theme }) => theme.colors.text};
    text-decoration: none;
  }
`

const Home = () => {
  return (
    <Wrapper>
      <Link href="/api/auth/login">Login</Link>
    </Wrapper>
  )
}

export default Home
