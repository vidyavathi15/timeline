import styled from 'styled-components/macro'

export const ProjectCardContainer = styled.div`
  height: 100%;
  width: 100%;
  margin-top: 7px;
  margin-bottom: 7px;
`
export const ProjectImage = styled.img`
  height: 100%;
  width: 100%;
`

export const ProjectTitleAndDurationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`
export const ProjectTitle = styled.h1`
  color: #171f46;
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: 800;
  line-height: 1.4;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`
export const DurationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Duration = styled.p`
  color: #171f46;
  font-size: 15px;
  font-family: 'Roboto';
  font-weight: 800;

  line-height: 1.4;
  margin-left: 4px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`
export const ProjectDescription = styled.p`
  color: #1e293b;
  font-size: 13px;
  font-family: 'Roboto';

  line-height: 1.4;
  margin-top: 4px;
`
export const VisitLink = styled.a`
  color: #0967d2;
  font-size: 15px;
  font-family: 'Roboto';
  font-weight: 800;
`
