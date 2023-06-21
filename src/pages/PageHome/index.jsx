import ColecaoDestaque from '../../components/ColecaoDestaque';
import './style.css'

const PageHome = () => {
    return(
        <>
            <h1>Home</h1>
            
            <ColecaoDestaque title="Coleções em destaque" typeModeCollection="cards"/>

            <ColecaoDestaque title="Coleções em destaque" typeModeCollection="icons"/>
        </>
    );
}

export default PageHome;