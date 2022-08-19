import styled from 'styled-components';

const Title = styled.h2`
  font-size: ${p => `${p.theme.fontSizes.l}px`};
  line-height: ${p => p.theme.lineHeights.title};
  color: ${props => props.theme.colors.title};
  font-family: ${p => p.theme.fonts.title};
`;

export default Title;
