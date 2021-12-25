import styled from '@emotion/styled';

export const StatisticsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: calc(100% / 4);
  padding: 10px;

  color: #ffffff;
  background-color: ${() =>
    `#${Math.floor(Math.random() * 16777215).toString(16)}`};
`;

export const Label = styled.span`
  font-weight: 400;
  font-size: 13px;
  line-height: 1.15;
  margin-bottom: 10px;
`;

export const Percentage = styled.span`
  font-weight: 400;
  font-size: 20px;
  line-height: 1.15;
`;
