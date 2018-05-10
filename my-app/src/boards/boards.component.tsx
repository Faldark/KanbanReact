import * as React from "react";
import { Button } from "reactstrap";
import { Board } from "./board/board.component";

import { ModalAddComponent } from "../General/ModalAdd.component";
import { IBoards } from "../interfaces/IBoards";



export class BoardsComponent extends React.Component<{}, IBoards> {
    private url = "http://localhost:19489/api/boards";
    
    constructor(props: any) {
        super(props);
        this.state = {boards: []};
        

    }

    public componentDidMount() {
        fetch(this.url, {
            method: 'GET',
            // headers: {
            //     'Accept': 'application/json',
            //     'Content-Type': 'application/json',
            //   }
        })
            .then(responce => responce.json())
            .then(data => this.setState({boards: data.boards}))
    }

    public modalAdd() {
        return (
            <ModalAddComponent url={this.url} headername={"Board"} modal={true}/>
        )
    }
    
     public render() {
        
        return(
            <div className="col-sm-5">
                <Button color="primary" onClick={this.modalAdd} size="lg" block={true} style={{marginBottom: '5px'}}>Add New Board</Button>
                {this.state.boards.map(board => <Board key={board.id} id={board.id}/>)}
            </div>
        ) 
                 
    }
    
}