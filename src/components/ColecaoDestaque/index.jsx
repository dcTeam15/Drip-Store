import styled from "styled-components";
import CardDestaque from "../CardDestaque";

const ColecaoDestaque = (props) => {
    return(
      <Container>
        <h3>{props.title}</h3>
        <CardDestaque />
      </Container>
    )
  }

  const Container = styled.section`
    display: flex;
    flex-direction: column;
    outline: solid 1px red;
    margin-left: 6rem;
    margin-right: 6rem;
  `
  
  export default ColecaoDestaque;