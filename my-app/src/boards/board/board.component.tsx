import * as React from "react";

import { IBoard } from "../../interfaces/IBoard";
import './board.component.css';
interface IBd {
    id: number;
    onBoardDelete: (id: number) => void
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

         this.deleteBoard = this.deleteBoard.bind(this);
    }

    public componentDidMount() {
        fetch(this.url + "/" + this.state.id, {
            method: 'GET'
        })
            .then(responce => responce.json())
            .then(data => this.setState({description: data.description, title: data.title}))
    }

    public deleteBoard() {
        fetch(this.url + "/" + this.state.id, {
            method: 'DELETE'
        })
        .then(() => this.props.onBoardDelete(this.state.id))
            // .then(responce => responce.json())
            // .then(data => this.setState({description: data.description, title: data.title}))
    }

    
    public render() {
        return (
            <div>
                <div>
                    <h1>{this.state.title}</h1>
                    <p>{this.state.description}</p>
                    <div className="row">
                        <p><a className="btn btn-primary btn-lg" href="#" role="button" style={{marginRight: '5px'}} onClick={this.deleteBoard}>Delete board</a></p>
                        <p><a className="btn btn-primary btn-lg" href="#" role="button" style={{marginRight: '5px'}}>View board</a></p>
                    </div>
                    
                </div>
               
                
            </div>
        )
    }
    
}