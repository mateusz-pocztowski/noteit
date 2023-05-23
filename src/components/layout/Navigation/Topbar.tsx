import styled from 'styled-components'
import { useRouter } from 'next/router'

import { MENU_ITEMS } from 'config'

import { Text } from 'components/shared/Typography'
import { useGetUserDataQuery } from 'generated/graphql'
import { useSession } from 'next-auth/client'
import graphqlRequestClient from 'lib/client'

const Wrapper = styled.nav`
  width: 100%;
`

const InnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Topbar: React.FC = () => {
  const { route } = useRouter()
  const [session] = useSession()

  const { data } = useGetUserDataQuery(graphqlRequestClient, {
    userId: session!.id,
  })

  return (
    <Wrapper>
      <InnerWrapper>
        <div>
          <Text family="secondary" size={16} themecolor="textLight" line="1">
            Hi, {data?.user?.name}!
          </Text>
          <Text family="secondary" size={30} weight={700}>
            {MENU_ITEMS.find(({ to }) => to && route.includes(to))?.label}
          </Text>
        </div>
      </InnerWrapper>
    </Wrapper>
  )
}

export default Topbar
