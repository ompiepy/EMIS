"use client"
import React from 'react'
import { styled } from 'styled-components'
import OurDepartmentIndividualCard from './OurDepartmentIndividualCard'
import bg from '@/assets/OurDepartmentsGridBackground.png'

export const H1 = styled('h1')`
    font-size: 26px;
    color: #090C4C;
    text-align: center;
    margin-top: 144px;
`

export const ContainerCentered = styled('section')`
    width: 90vw;
    margin: 26px auto 0 auto;
    border-radius: 16px;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
`

const OurDepartmentsSection = () => {
    const contents_API = [
        {
            id: 1,
            title: 'Architecture',
            subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros quis nisl aliquam aliquet.'
        },
        {
            id: 2,
            title: 'Civil',
            subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros quis nisl aliquam aliquet.'
        },
        {
            id: 3,
            title: 'Industrial',
            subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros quis nisl aliquam aliquet.'
        },
        {
            id: 4,
            title: 'Electronics & Computer',
            subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros quis nisl aliquam aliquet.'
        },
        {
            id: 5,
            title: 'Automobile & Mechanical',
            subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros quis nisl aliquam aliquet.'
        },
        {
            id: 6,
            title: 'Applied Science',
            subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros quis nisl aliquam aliquet.'
        }
    ]

  return (
    <>
        <H1>Our departments</H1>
        <ContainerCentered style={{ backgroundImage: `url(${bg.src})`, objectFit: 'cover'}}>
            { contents_API.map((content) => (
                <OurDepartmentIndividualCard content={content} key={content.id} />)
            )}
        </ContainerCentered>
    </>
  )
}

export default OurDepartmentsSection