import styled from 'styled-components';

export const StyledButtonList = styled.ul`
  display: flex;
`;

export const StyledButtonItem = styled.li`
  list-style: none;
`;

export const StyledButton = styled.button`
  background-color: ${p => p.theme.colors.primaryButton};
  color: ${p => p.theme.colors.white};
  padding: ${p => p.theme.space[3]}px;
  margin-right: ${p => p.theme.space[4]}px;
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.button};
  cursor: pointer;

  :hover {
    background-color: ${p => p.theme.colors.secondaryButton};
  }
`;
