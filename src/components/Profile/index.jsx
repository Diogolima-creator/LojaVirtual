import * as C from './styles';
import images from '../../images/perfil1.png'
import { useHistory } from "react-router";



export const Profile = () => {

    const history = useHistory();
    
    const handleProfile = () => {
        history.push('/profile');

        
    }
    
    return(
        <C.Container>
            <button onClick={handleProfile}><img src={images} alt={images}></img></button>
        </C.Container>
    );
}