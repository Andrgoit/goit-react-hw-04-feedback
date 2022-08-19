import styled from 'styled-components';

export const StatisticItem = styled.p`
  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.lineHeights.text};
`;
export const StatisticItemValue = styled.span`
  color: ${p => p.theme.colors.value};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.lineHeights.text};
`;
