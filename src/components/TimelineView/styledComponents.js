import styled from 'styled-components/macro'

export const TimelineContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`
export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1110px;
  min-height: 100vh;
`
export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
`
export const Heading = styled.h1`
  color: #171f46;
  font-size: 22px;
  font-family: 'Roboto';
  font-weight: 800;
  @media screen and (min-width: 768px) {
    font-size: 25px;
  }
`
export const CCBPHeading = styled.p`
  color: #2b237c;
  font-size: 26px;
  font-family: 'Roboto';
  font-weight: 800;

  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`
