import styled from 'styled-components/macro'

export const CourseTitleAndDurationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`
export const CourseTitle = styled.h1`
  color: #171f46;
  font-size: 25px;
  font-family: 'Roboto';
  font-weight: 800;
  line-height: 1.4;
  margin: 0px;
  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`
export const DurationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Duration = styled.p`
  color: #171f46;
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: 800;
  line-height: 1.4;
  margin-left: 4px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`

export const CourseDescription = styled.div`
  color: #1e293b;
  font-size: 12px;
  font-family: 'Roboto';
  line-height: 1.4;
  margin-top: 0px;

  @media screen and (min-width: 768px) {
    font-size: 15px;
  }
`
export const CourseTagList = styled.ul`
  padding-left: 0px;
  margin: 0px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`
export const CourseTagItem = styled.li`
  list-style-type: none;
`
export const CourseTag = styled.p`
  color: #2b237c;
  background-color: #e2e8f0;
  font-size: 12px;
  font-family: 'Roboto';
  line-height: 1.4;
  font-weight: 800;
  border-radius: 4px;
  padding: 4px 8px;
  margin: 0px;
  margin-bottom: 10px;
  margin-right: 10px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    font-weight: 800;
  }
`
