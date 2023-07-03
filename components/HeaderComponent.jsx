"use client"
import Link from 'next/link'
import React from 'react'
import { styled } from 'styled-components'
import logo from '@/assets/logo.svg';
import Image from 'next/image';

const Header = styled('header')`
  width: 90vw;
  margin: 0 auto;
`

const Navbar = styled('nav')`
`

const Flexbox = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Logo = styled.div`
  width:70px;
  height:85px;
  position:relative;
`

const Subtitle = styled('h2')`
  font-size: 16px;
  font-weight: 400;
`

const Title = styled('h1')`
  font-size: 16px;
  font-weight: 700;
`

const TextContainer = styled('div')`
  display: flex;
  flex-direction: column;
`

const HeaderComponent = () => {
  return (
    <Header>
        <Navbar>
          <Link href="/" style={{ textDecoration: "none"}}>
            <Flexbox>
              <Logo>
                <Image src={logo} layout="fill" objectFit="contain" alt="" />
              </Logo>
              <TextContainer>
                <Subtitle>Institute of Engineering</Subtitle>
                <Title>Thapathali Campus</Title>
              </TextContainer>
            </Flexbox>
          </Link>

          <Flexbox>
            
          </Flexbox>
        </Navbar>
    </Header>
  )
}

export default HeaderComponent