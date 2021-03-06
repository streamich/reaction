import React from "react"
import styled from "styled-components"
import { pMedia } from "../../Helpers"
import { Fonts } from "../Fonts"

interface NewsHeadlineProps {
  article: any
  editTitle?: any
}

export const NewsHeadline: React.SFC<NewsHeadlineProps> = props => {
  const { article, editTitle } = props
  const { title } = article

  return (
    <NewsHeadlineParent>
      <NewsHeadlineContainer>
        <Title>{editTitle ? editTitle : title}</Title>
      </NewsHeadlineContainer>
    </NewsHeadlineParent>
  )
}

const NewsHeadlineParent = styled.div`
  margin: 0 40px;
  ${pMedia.sm`
    margin: 0 20px;
  `};
`

const NewsHeadlineContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  max-width: 780px;
  width: 100%;
  margin: 40px auto;
  box-sizing: border-box;
  margin-bottom: 30px;
`

const Title = styled.div`
  ${Fonts.garamond("s34")};
  font-weight: 600;
  ${pMedia.sm`
    ${Fonts.garamond("s23")}
    line-height: 1.1;
  `};
`
