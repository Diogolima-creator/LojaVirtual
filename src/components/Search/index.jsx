import * as C from './styles';
import { ReactComponent as SearchIcon } from '../../svgs/search.svg';
import { ProductAction, useProd } from '../../contexts/ProductContext';
import { useHistory } from 'react-router';
import { ChangeEvent  } from "react";


const handleMaximizeSearch = () => {
    if(document.getElementById("search").style.display === "none"){
    document.getElementById("search").style.display = "block";
    }else{
        document.getElementById("search").style.display = "none"
    }
}

export const Search = () => {

    const history = useHistory();
    const { state, dispatch } = useProd();

    const handleSearchChange = (e = ChangeEvent) => {
        dispatch({
            type: ProductAction.setSearch,
            payload: e.target.value
        });
        
    }

    const handleSearch = () => {
        if(state.search !== '' && state.search !== undefined) {
            history.push('/search');
            window.scrollTo(0,0);
        }
            
    }

    return(
        <C.Container >
           <div className="searchInput">
               <SearchIcon onClick = {handleMaximizeSearch} />
                <div id ="search" className="search">
                    <div className="searchBlock">
                        <input className="input"
                        type="text"
                        placeholder="Buscar..."
                        onChange = {handleSearchChange}
                        ></input>
                        <SearchIcon onClick = {handleSearch} className="lupa-search"/>
                    </div>
                </div>
           </div>
        </C.Container>
    );
}