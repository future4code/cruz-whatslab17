import React from "react";
import styled from 'styled-components'

const DivBorder = styled.div`
            height: 99vh;
            width: 70vw;
            margin-left: 250px;
            margin-right: 250px;
            display: flex;
            border: solid 1px ;           
            justify-content: center;
            align-items: flex-end;
        `

const DivInput = styled.div`
    display:flex;
    align-items:flex-start;
    
`

const DivMsgs = styled.div`
    display:flex;
    margin-bottom: 15px;
    align-self: flex-end;
    position:absolute;
    flex-direction:column;
    margin-right: 60vw;
`
const DivP = styled.div`
    display:flex;
    padding:0;
    
`
const InputUsuario = styled.input`
    width: 8.3vw;
`

const InputMensagem = styled.input`
    width: 54.2vw;
`

class Mensagens extends React.Component {
    state = {
        mensagens: [],
        valorInputUsuario:'',
        valorInputMensagem:''
    }

    adicionaMensagem = () => {
        const novaMensagem = {
            usuario: this.state.valorInputUsuario,
            mensagem: this.state.valorInputMensagem
        }

        const novasMensagens = [...this.state.mensagens, novaMensagem]

        this.setState({mensagens: novasMensagens,
                       valorInputMensagem:''})

    }

    onChangeInputUsuario = (event) => {
        this.setState({valorInputUsuario: event.target.value})
    }

    onChangeInputMensagem = (event) => {
        this.setState({valorInputMensagem: event.target.value})
    }

    render () {

        const listaDeComponentes = this.state.mensagens.map((mensagem) => {
            return (
                <DivP>
              <p>
                <b>{mensagem.usuario}:</b> {mensagem.mensagem}
              </p>
              </DivP>
            );
          });

        return (
            <DivBorder>                
                <DivInput>               
                <InputUsuario
                    value={this.state.valorInputUsuario}
                    onChange={this.onChangeInputUsuario}
                    placeholder={"Usuário"}
                />

                <InputMensagem
                    value={this.state.valorInputMensagem}
                    onChange={this.onChangeInputMensagem}
                    placeholder={"Mensagem"}
                />

                <button onClick={this.adicionaMensagem}>Enviar</button>
                </DivInput>
                <DivMsgs>{listaDeComponentes}</DivMsgs>
            </DivBorder>
        )
        
       
    }
}

export default Mensagens