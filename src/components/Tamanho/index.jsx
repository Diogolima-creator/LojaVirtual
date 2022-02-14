import * as C from './styles'

const Props = {
    title: String,
    selected: Boolean,
    onClick: () => {}
}

export const Tamanho = ( { title, selected, onClick} = Props) => {
    return(
        <C.Container onClick={onClick} selected={selected}>
            <C.Title>{title}</C.Title>
        </C.Container>
    );
}