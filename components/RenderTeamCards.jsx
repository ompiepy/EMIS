"use client";

import TeamCard from "./TeamCard";
import { styled } from "styled-components";

export const CardsContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 6em;
  flex: 1fr 1fr 1fr;
  justify-content: center;
`;

export const Title = styled.h1`
  width: 10%;
  padding-bottom: 0.3em;
  color: #333333;
  border-bottom: 5px solid #7177ff;
`;

export const Wrapper = styled.section`
  width: 95%;
  margin: 0 auto;
  padding: 2em 0;
`;

export const RenderTeamCards = ({ Members }) => {
    return (
        <Wrapper>
            <Title>Staff</Title>
            <CardsContainer>
                {Members.map((member, index) => {
                    return <TeamCard key={index} detail={member} />;
                })}
            </CardsContainer>
        </Wrapper>
    );
};