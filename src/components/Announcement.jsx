import React from 'react'
import styled from 'styled-components'

const Container = styled.div `
    height: 30px;
    background-color: teal;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bolder;
    font-size: 14px;
`

function Announcement() {
  return (
    <Container>
        Super Deal  ! Free shippings on Orders above $50 !
    </Container>
  )
}

export default Announcement