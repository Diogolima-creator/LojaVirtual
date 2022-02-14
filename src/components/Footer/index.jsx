import * as C from './styles';
import images from '../../images/email2.png';
import images1 from '../../images/twitter.png';
import images2 from '../../images/youtube.png';
import images3 from '../../images/instagram.png';
import images4 from '../../images/paypal.png';
import images5 from '../../images/visa.png';
import images6 from '../../images/mastercard.png';
import images7 from '../../images/boleto.png';
import { useHistory } from 'react-router';

export const Footer = () => {

    const history = useHistory();

    const handlePage = ( page ) => {
        history.push(page)

        if(page === '/profile' && localStorage.getItem('token') === null){
            alert('Faça Login')
            
        }
    }
    return(
        <C.Container>
            <div className="Newsletter">
                <img src={images} alt={images}/> 
                <C.Text>ASSINE NOSSA NEWSLETTER E FIQUE POR DENTRO DE TODAS AS NOVIDADES COM EXCLUSIVIDADE!</C.Text>
                <C.Form>
                        
                        <form action="" method="post"> 
                            <input type="text" name="name" required placeholder="Digite seu Nome"/>
                            <input type="email" name="email" required placeholder="Digite seu E-mail"/>
                            <input className="sumbit" type="submit" value="Enviar"/>
                        </form>
                </C.Form>
            </div>
            <C.Footer>
                <C.Text className="NCSM">NCSM</C.Text>
                <div className="Listas">
                    <C.List>
                        <ul className="payout">
                            Formas de Pagamento
                            <li>Cartão de credito</li>
                            <li><img src={images5} alt={images5}/><img src={images6} alt={images6}/></li>
                            <li>Paypal</li>
                            <li><img src={images4} alt={images4}/></li>
                            <li>Boleto bancário com 10% de desconto</li>
                            <li><img src={images7} alt={images7}/></li>
                        </ul>
                    </C.List>
                    <hr className="hr"/>
                    <C.List>
                        <ul>
                            SOBRE A NCSM
                            <li>Sobre a Ncsm</li>
                            <li>Políticas do Site</li>
                            <li>Política de Privacidade</li>
                            <li>Trocas e Devoluções</li>
                            <li>Newsletter</li>
                            <li>Formulário</li>
                        </ul>
                    </C.List>
                    <C.List>
                        <ul>
                            ÁREA DO CLIENTE
                            <li onClick={()=>handlePage('/profile')}>Minha conta</li>
                            <li onClick={()=>handlePage('/profile')}>Histórico de pedidos</li>
                            <li onClick={()=>handlePage('/profile')}>Lista de desejos</li>
                            <li onClick={()=>handlePage('/cart')}>Carrinho de compras</li>
                            <li>Finalizar pedido</li>
                        </ul>
                    </C.List>
                    <C.List>
                        <ul>
                            Contato
                            <li>Fale conosco</li>
                            <li>(11) 1111-1111</li>
                            <li>sac@ncsm.gg</li>
                            <li className="horario">Horário de atendimento:
                            Segunda à sexta-feira, 
                            De 09:00h às 18:00h.</li>
                            
                        </ul>
                    </C.List>
                    <C.List >
                        Redes Socias
                        <ul className="redesociais">
                            <li><a href="https://twitter.com/dbznetudo" rel="noreferrer" target="_blank"><img src={images1} alt={images}/></a></li>
                            <li><a href="https://www.instagram.com/diogo_lima1408/" rel="noreferrer" target="_blank"><img src={images3} alt={images}/></a></li>
                            <li><a href="https://www.youtube.com/c/DbzNetudoBr" rel="noreferrer" target="_blank"><img src={images2} alt={images}/></a></li>
                        </ul>
                    </C.List>
                </div>
            <C.Text className="Edr">NCSM Store| 11.111.111/1111-22| Rua Ficticia, 16 - Jd Ficticio- Guarulhos/ RJ - CEP 00000-000</C.Text>
            <hr></hr>
            <C.Text className="Edr1">©2021 NCSM - Todos os direitos reservados.</C.Text>
            </C.Footer>
        </C.Container>
    );
}