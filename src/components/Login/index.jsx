import * as C from './styles';
import { useHistory } from "react-router";

const handleLoginScreen = (modalID) => {
        var modal = document.getElementById(modalID);
        modal.classList.add('mostrar');
        modal.addEventListener('click', (e) => {
            if(e.target.id === "btnclose") modal.classList.remove('mostrar');
        })
}



export const Login = () => {

    const handleCadastro = () => {
    history.push('/register');
    }

    const history = useHistory();

    async function loginUser(event){
        event.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        const result = await fetch('http://localhost:9999/authenticate',{
            method: 'POST',
            headers:{
                'Content-type' : 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        }).then((res) => res.json())
  
        if(result.status === 'ok'){
          alert('sucess');
          localStorage.setItem('token', result.token);
          localStorage.setItem('id', result.user._id);
          history.push('/');
        }else{
          alert(result.error);
        }
      }

      
    return(
        <C.Container>
            <button id="btn" onClick={() => handleLoginScreen("modal")}>Fazer Login</button>
            <C.Form id="form">
                <div id="modal" className="modal-container">
                    <div id="modal-dentro" className="modal">
                        <button className="btnclose" id="btnclose">X</button>
                        <p>Faça seu acesso</p>
                        <hr></hr>
                        <form id="form-login"className="form-login" method="post">
                            <label for="uname"><b>Email:</b></label>
                            <input type="email" id="email" placeholder="Email" name="uname" required/>
                            <label for="psw"><b>Senha:</b></label>
                            <input type="password" id="password" placeholder="Senha" name="psw" required></input>
                            <button type="submit" onClick={loginUser}>Login</button>
                        </form>
                        <div id="cadastro" className="cadastro">
                                <p>Não possui cadastro ?</p>
                                <p>Faça já seu cadastro.</p>
                            <button onClick={handleCadastro} className="btn-cadastro">Cadastra-se</button>
                        </div>
                        

                    </div>
                    


                </div>
            </C.Form>
        </C.Container>
    );
}