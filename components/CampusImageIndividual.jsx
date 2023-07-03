"use client"
import React from 'react'
import Image from 'next/image'
import CoverImage from '@/assets/OurDepartmentsGridBackground.png'

const CampusImageIndividual = ({ content }) => {
  return (
    <div style={{position: "relative"}}>
        <Image src={CoverImage} layout="fill" objectFit="cover" alt="Campus Chief" />
    </div>
  )
}

export default CampusImageIndividual