import { useRef } from 'react'
import styled from 'styled-components'
import { useSession } from 'next-auth/client'
import { useQueryClient } from 'react-query'

import { useGetUserDataQuery, useUpdateUserMutation } from 'generated/graphql'
import graphqlRequestClient from 'lib/client'

import { toBase64 } from 'utils/toBase64'
import { resizeImageFixed } from 'utils/resizeImage'

import { Text } from 'components/shared/Typography'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
  & > p {
    margin-left: 15px;
    white-space: nowrap;
  }
`

const PlusButton = styled.div`
  position: absolute;
  bottom: 5px;
  right: 5px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.blue};
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transform: scale(0);
  transition: 0.2s;
  ${Text} {
    width: 18px;
    height: 18px;
  }
`

const PictureInner = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  background: ${({ theme }) => theme.colors.blue100};
  border: 2px solid transparent;
  border-radius: 50%;
  overflow: hidden;
  transition: border-color 0.2s;
`

const Picture = styled.button`
  position: relative;
  background: transparent;
  cursor: pointer;
  padding: 0;
  margin: 0 0 15px;
  &:hover {
    ${PlusButton} {
      opacity: 1;
      transform: scale(1);
    }
    ${PictureInner} {
      border-color: ${({ theme }) => theme.colors.blue};
    }
  }
`

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
`

const FileInput = styled.input`
  display: none;
`

const Profile: React.FC = () => {
  const [session] = useSession()
  const queryClient = useQueryClient()

  const { data } = useGetUserDataQuery(graphqlRequestClient, {
    userId: session!.id,
  })

  const { mutate } = useUpdateUserMutation(graphqlRequestClient, {
    onError: e => console.log(e),
    onSuccess: () => queryClient.invalidateQueries('GetUserData'),
  })

  const inputRef = useRef<HTMLInputElement>(null)

  const handleImageClick = () => {
    if (inputRef.current) {
      inputRef.current.click()
    }
  }

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const id = session?.id
    if (id && data?.user && e.target.files) {
      const fileUploaded = e.target.files[0]
      const base64File = await toBase64(fileUploaded)
      const resizedImg = await resizeImageFixed(base64File, 100, 100)

      const { name } = data.user
      mutate({ userId: id, name, image: resizedImg })
    }
  }

  return (
    <>
      {data?.user && (
        <Wrapper>
          <Picture onClick={handleImageClick}>
            <FileInput ref={inputRef} type="file" onChange={handleChange} />
            <PictureInner>
              {data.user.image ? (
                <Image src={data.user.image} alt={'profile picture'} />
              ) : (
                <Text
                  family="secondary"
                  weight={700}
                  themecolor="blue"
                  size={20}
                >
                  {(data.user.name || '')
                    .split(' ')
                    .map(n => n[0])
                    .slice(0, 2)
                    .join('')}
                </Text>
              )}
            </PictureInner>
            <PlusButton>
              <Text
                family="secondary"
                themecolor="white"
                weight={500}
                line="18px"
                align="center"
                size={18}
              >
                +
              </Text>
            </PlusButton>
          </Picture>
          <Text size={18} weight={600}>
            {data.user.name}
          </Text>
          <Text
            size={14}
            weight={500}
            themecolor="textLight"
            family="secondary"
          >
            Free user
          </Text>
        </Wrapper>
      )}
    </>
  )
}

export default Profile
