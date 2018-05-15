import * as React from "react";

import { Board } from "./board/board.component";



import { ModalAddComponent } from "../General/ModalAdd.component";
// import { IBoard } from "../interfaces/IBoard";
 import { IBoards } from "../interfaces/IBoards";

interface IState extends IBoards{
    
    showModal: boolean
}


export class BoardsComponent extends React.Component<{}, IState> {
    private url = "http://localhost:19489/api/boards";
    
    constructor(props: any) {
        super(props);
        this.state = {boards: [], showModal: false};
        this.modalOpen = this.modalOpen.bind(this)
        this.handleDeleteBoard = this.handleDeleteBoard.bind(this);
        
    
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

    public modalOpen() {
        
        this.setState({
            showModal: true
        })

        
    }
    public handleDeleteBoard(id: number) {
        this.setState({boards : this.state.boards.filter(item => item.id !== id)});
    }
    
     public render() {
        
        return(
            <div className="col-sm-5">
                {/* <Button color="primary" onClick={this.modalOpen} size="lg" block={true} style={{marginBottom: '5px'}}>Add New Board</Button> */}
                <p><a className="btn btn-primary btn-lg " onClick={this.modalOpen} role="button" >Add New Board</a></p>
                <ModalAddComponent url={this.url} headername={"Board"} modal={this.state.showModal}/>
                {this.state.boards.map(board => <Board key={board.id} id={board.id} onBoardDelete={this.handleDeleteBoard}/>)}
            </div>
        ) 
                 
    }
    
}