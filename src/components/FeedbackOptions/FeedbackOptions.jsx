import PropTypes from 'prop-types';
import {
  StyledButtonList,
  StyledButtonItem,
  StyledButton,
} from 'components/FeedbackOptions/FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <StyledButtonList>
      {options.map(option => {
        return (
          <StyledButtonItem key={option}>
            <StyledButton
              type="button"
              name={option}
              onClick={() => {
                onLeaveFeedback(option);
              }}
            >
              {option}
            </StyledButton>
          </StyledButtonItem>
        );
      })}
    </StyledButtonList>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
};
