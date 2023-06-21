import styled from "styled-components";

const CardDestaque = (props) =>{
    return(
        <>
            <CardContainer>
                <div>
                    {props.cardDestaqueDiscount}
                </div>
                <div>
                    {props.cardDestaqueTitle}
                </div>
                <div></div>
            </CardContainer>
        </>
    )
}

const CardContainer = styled.section`
    display: flex;
    outline: solid 1px red;
    width: 1/4;
    height: auto;
    background-color: aqua;
`

const Discount = styled.div`
    

`
  

export default CardDestaque;