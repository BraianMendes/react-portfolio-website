import styled from 'styled-components';

const H1 = styled.h1 `
  color:${({theme}) => theme.colors.dark}
  font-size: ${(props) => props.isBig ? '3em' : '1em'}; 

  max-height:100px;
  
`;

export default H1;