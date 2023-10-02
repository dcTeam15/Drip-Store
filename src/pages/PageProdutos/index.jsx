import styled from "styled-components";

const PageProdutos = () => {
    return (
        <>
            <ProdutosContainer>
                <ProdutosHeader>
                    <h6>Resultados para "Tenis" - <span>389 produtos</span></h6>
                    <ProdutosFilter>
                        <b>Ordernar por: </b>
                        <select>
                            <option>mais relevantes</option>
                        </select>
                    </ProdutosFilter>
                </ProdutosHeader>
                <ProdutosBody>
                    <ProdutosAside>

                    </ProdutosAside>
                    <ProdutosList>

                    </ProdutosList>
                </ProdutosBody>
            </ProdutosContainer>
        </>
    );
};

const ProdutosContainer = styled.div`
    background-color: #f6f6f6;
    padding: 60px 100px;
    box-shadow: 0 10px 80px -50px #00000025 inset;
`;

const ProdutosHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    & h6{
        font-size: 16px;
        line-height: 24px;
        letter-spacing: .75px;
        
        & span{
            font-weight: normal;
        }
    }
`;
const ProdutosFilter = styled.div`
    height: 60px;
    border: 1px solid #474747;
    border-radius: 5px;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: .75px;
    display: flex;
    align-items: center;
    padding: 0 16px;

    & select{
        font-size: 16px;
        background-color: transparent;
    }
`;
const ProdutosBody = styled.div``;
const ProdutosAside = styled.div``;
const ProdutosList = styled.div``;

export default PageProdutos;