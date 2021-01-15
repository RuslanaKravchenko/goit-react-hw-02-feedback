import styled from 'styled-components';

const Buttons = styled.div`
  .feedback_btn {
    padding: 10px 20px;

    background-color: #aedbe0;
    border: 1px solid #486b6f;
    border-radius: 5px;

    box-shadow: 0px 5px 10px 2px rgba(9, 1, 9, 0.2);
  }
  .feedback_btn:hover,
  .feedback_btn:focus {
    transform: scale(1.03);
    border: 1px solid #906c83;
    outline: none;
    box-shadow: 0px 5px 10px 2px rgba(97, 27, 92, 0.2);
  }
  .feedback_btn:not(:last-child) {
    margin-right: 10px;
  }
`;
export default Buttons;
