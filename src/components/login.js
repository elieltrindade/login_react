import React, { Component } from 'react';
import Container from '@mui/material/Container';
import './login.css';

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            usuario: [{ email: "eduardo.lino@pucpr.br", senha: "123456" },
            { email: "eliel@pucpr.br", senha: "eli123" }],
            email: "",
            senha: ""
        };
        this.validar = this.validar.bind(this);
    }

    inserirMudanca(event, campo) {
        const value = event.target.value;
        this.setState({
            [campo]: value
        });
    }


    validar() {
        const { email, senha, usuario } = this.state
        const usuarioEncontrado = usuario.find(user => user.email === email && user.senha === senha)
        if (usuarioEncontrado) {
            this.setState({ mensagem: "Acessado com sucesso!" });
        } else {
            this.setState({ mensagem: "Usuário ou senha incorretos!"})
        }
    }




    render() {
        return (
            <div className="primaria">
                <div className="centro">
                    <Container maxWidth="sm">
                        <div className="wrapper">
                            <div>
                                <h1 className="tituloLogin">Login</h1>
                            </div>
                            <div>
                                <label className="tituloCampo" for="email">E-mail:</label><br />
                                <input className="campo" id="email" type="text" size="20" name="email" placeholder="Informe seu e-mail" value={this.state.email} onChange={(e) => this.inserirMudanca(e, "email")} />
                            </div>
                            <div>
                                <label className="tituloCampo" for="password"> Senha:</label><br />
                                <input className="campo" id="password" type="password" size="20" name="password" placeholder="Informe sua palavra-passe" value={this.state.senha} onChange={(e) => this.inserirMudanca(e, "senha")} />
                            </div>
                            <div className="divbotaoAcesso">
                                <button className="botaoAcesso" type="submit" onClick={this.validar}>Acessar</button>
                            </div>
                            <div className={`mensagem ${this.state.mensagem === "Acessado com sucesso!" ? "sucesso" : "erro"}`}>
                            {this.state.mensagem}
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
        )
    }

}
export default Login;