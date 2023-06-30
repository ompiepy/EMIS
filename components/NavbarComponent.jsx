"use client"
import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'

import logo from '../assets/logo.png'
import search from '../assets/search.png'

const Navbar = styled.nav`
    background-color: #ffffff;
    color: #000000;
    display: flex;
    width: 100%;
    min-height: 80px;
    padding: 18px 64px 12px 64px;
    /* margin: 18px 64px 0px 64px; */
    position: sticky;
    top: 0;
    z-index: 100;

    
`

const LogoContainer = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    gap:12px;
`

const Logo = styled(Image)`
    height: 80px;
`
const LogoTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    `
const LogoTextsub = styled.div`
    font-size: 16px;
`
const LogoText = styled.div`
    font-size: 18px;
    font-weight: 700;
`

const NavLinks = styled.div`
    display: flex;
    /* border: 1px solid #000000; */
    flex: 3;
    align-items: center;
    justify-content: flex-end;
    gap:36px;
`
const NavlinkItem = styled(Link)`
    cursor: pointer;
    font-size: 18px;
    text-decoration: none;
    color: #000000;
    &:hover {
        color: #979797;
    }
`
const SearchbuttonContainer = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: flex-end;
    color: #676767;
`

const Searchbutton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    font-size: 16px;
    background-color: #F6F5F5;
    height:50px;
    width: 175px;
    border: 0px solid #000000;
    border-radius: 20px;
    color: #676767;
`


const NavbarComponent = () => {
    return (
        <Navbar>
            <LogoContainer>
                <Logo src={logo} width={69} height={80} alt="logo" />
                <LogoTextContainer>
                    <LogoTextsub>Institute of Engineering</LogoTextsub>
                    <LogoText>Thapathali Campus</LogoText>
                </LogoTextContainer>
            </LogoContainer>

            <NavLinks>
                <NavlinkItem href="/admission">Admission</NavlinkItem>
                <NavlinkItem href="/notice">Notice</NavlinkItem>
                <NavlinkItem href="/resources">Resources</NavlinkItem>
                <NavlinkItem href="/societies">Societies</NavlinkItem>
                <NavlinkItem href="/units">Units</NavlinkItem>
                <NavlinkItem href="/about">About</NavlinkItem>
            </NavLinks>
            <SearchbuttonContainer>
                <Searchbutton>
                    <Image src={search} width={18} height={18} alt="search" />
                    Search...
                </Searchbutton>
            </SearchbuttonContainer>
        </Navbar>
    )
}

export default NavbarComponent