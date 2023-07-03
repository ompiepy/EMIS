"use client"
import React from 'react'
import { styled } from 'styled-components'

const Container = styled('div')`
    min-height: 200px;
    min-width: 600px;
    background-color: #fff;
    padding: 3rem;
    border: 5px solid #DBDEE7;
    border-radius: 16px;
    box-shadow: 5px 8px 10px 0px rgba(0,0,0,0.25);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
`

const Content = styled('p')`
    font-size: 1rem;
`

const StudentProfile = styled('img')`
    height: 74px;
    width: 74px;
    border-radius: 50%;
`

const StudentName = styled('h1')`
    margin-top: 1rem;
    font-size: 0.9rem;
    text-align: center;
`

const StudentId = styled('h2')`
    font-size: 0.50rem;
    text-align: center;
`

const StudentTestimonialCard = ({ testimonial }) => {
  return (
    <Container>
        <Content>"{ testimonial.content }"</Content>
        <div>
            <StudentProfile src={ testimonial.student_profile } />
            <StudentName>{ testimonial.name }</StudentName>
            <StudentId>{ testimonial.student_id }</StudentId>
        </div>
    </Container>
  )
}

export default StudentTestimonialCard