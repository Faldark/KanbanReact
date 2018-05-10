import * as React from "react";
import {Button,Container,Jumbotron  } from 'reactstrap';
import { IBoard } from "../../interfaces/IBoard";
import './board.component.css';
interface IBd {
    id: number;
}


export class Board extends React.Component<IBd, IBoard> {
    private url = "http://localhost:19489/api/boards";

    
    
    constructor(props: IBd) {
        super(props);
        this.state = {
            description: "",
            id: props.id,
            title: ""
            
         };
    }

    public componentDidMount() {
        fetch(this.url + "/" + this.state.id, {
            method: 'GET'
        })
            .then(responce => responce.json())
            .then(data => this.setState({description: data.description, title: data.title}))
    }

    
    public render() {
        return (
            <div>
                <Jumbotron fluid={true}>
                  <Container fluid={true}>
                    <h1 className="display-3">{this.state.title}</h1>
                    <p className="lead">{this.state.description}</p>
                    <hr className="my-2"/>
                    <p className="lead btn-toolbar">
                    
                        <Button color="primary" style={{marginRight: '5px'}}>Delete board</Button>
                        <Button color="primary" style={{marginLeft: '5px'}}>View board</Button>
                    </p>
                   </Container>
                </Jumbotron>
            </div>
        )
    }
    
}

// <div> {this.state.description}{this.state.id}  {this.state.title}</div>