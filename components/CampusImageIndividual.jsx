"use client"
import React from 'react'

const CampusImageIndividual = ({ content }) => {
  return (
    <div styles={{display: "flex", backgroundColor: "grey", maxWidth: "100%", height: "100%"}}>
        <img src={content.image_src} styles={{width: "100%", height: "auto"}}/>
    </div>
  )
}

export default CampusImageIndividual