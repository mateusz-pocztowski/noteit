import styled from 'styled-components'
import { signOut, useSession } from 'next-auth/client'

import SEO from 'components/shared/SEO'

const Wrapper = styled.div``

const NotesPage = () => {
  const [session] = useSession()
  return (
    <Wrapper>
      <SEO title="Notes" />
      <span>
        <div>{JSON.stringify(session?.user)}</div>
      </span>
      <button onClick={() => signOut()}>sign out</button>
    </Wrapper>
  )
}

export default NotesPage
