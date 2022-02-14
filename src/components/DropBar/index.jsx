import * as C from './styles'
import { useHistory } from "react-router";
import { ProductAction, useProd } from '../../contexts/ProductContext';

export const DropBar = ( { title,dispatchAllItems } ) => {
    const history = useHistory();

    const { dispatch } = useProd();
    

    const handleSearchItem = ( item ) => {
            dispatch({
                type: ProductAction.setSearch,
                payload: item
              })
              dispatchAllItems();
            history.push('/search'); 
            window.scrollTo(0,0);
        }

    return(
        <C.Container >
            <div className="dropdown">
                🧥{title} ▾
                <div className="dropdown-content">
                    <ul>
                        <li onClick={() => handleSearchItem('Camiseta')}>Camisetas</li>
                        <li onClick={() => handleSearchItem('Regata')}>Regatas</li>
                        <li onClick={() => handleSearchItem('Moletom')}>Moletons</li>
                        <li onClick={() => handleSearchItem('Bermuda')}>Bermuda</li>
                    </ul>
                </div>
            </div>
        </C.Container>
    );
}