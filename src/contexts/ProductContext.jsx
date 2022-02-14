import { createContext, useContext, useReducer } from "react";

//Context
const initialData = {
    cartItens: [],
    qtyItem: 1,
    qntItem: 1,
    numProd: 0,
    tamProd: '',
    quantCart: 0,
    valorCart: 0,
    posit: 0,
    url: '',
    search:'',
    cep: Object
}

const ProductContext = createContext(undefined);

//Reducer
export const ProductAction = {
    setCartItens: "setCartItens",
    setQtyItem: "setQtyItem",
    setQntItem: "setQntItem",
    setNumProd: "setNumProd",
    setTamProd: "setTamProd",
    setQuantCart: "setQuantCart",
    setValorCart: "setValorCart",
    setPosit: "setPosit",
    setURL: "setURL",
    setSearch: "setSearch",
    setCEP: "setCEP"
}

const prodReducer = (state,action = ProductAction) => {
    switch(action.type){
        case ProductAction.setCartItens:
            return {...state, cartItens: action.payload};
        case ProductAction.setQtyItem:
            return {...state, qtyItem: action.payload};
        case ProductAction.setQntItem:
            return {...state, qntItem: action.payload};
        case ProductAction.setNumProd:
            return {...state, numProd: action.payload};
        case ProductAction.setTamProd:
            return {...state, tamProd: action.payload};
        case ProductAction.setQuantCart:
            return {...state, quantCart: action.payload};
        case ProductAction.setValorCart:
            return {...state, valorCart: action.payload};
        case ProductAction.setPosit:
            return {...state, posit: action.payload};
        case ProductAction.setURL:
            return {...state, url: action.payload};
        case ProductAction.setSearch:
            return {...state, search: action.payload};
        case ProductAction.setCEP:
            return {...state, cep: action.payload};
        default:
            return state;
    }
}

export const ProdProvider = ( { children }) => {
    const [state, dispatch] = useReducer(prodReducer, initialData)
    const value = { state, dispatch}
    return(
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    );
}

export const useProd = () => {
    const context = useContext(ProductContext);
    if(context === undefined){
        throw new Error('useForm preicsa se usado dentro do ProdProvider')
    }
    return context;
}