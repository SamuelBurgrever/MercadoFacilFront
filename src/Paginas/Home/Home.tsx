import NavBar from '../../Componentes/NavBar/NavBar';
import Paginacao from '../../Componentes/Paginacao/Paginacao';
import './Home.css';
const Home = () => {
    return(
        <>
            <div>
                <NavBar/>
            </div>

            <div>
                <Paginacao/>
            </div>
        </>        
    );
}
export default Home