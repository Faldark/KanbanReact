import * as React from "react";
// import { IBoard } from "../interfaces/IBoard";
import { IBoards } from "../interfaces/IBoards";




export class BoardsComponent extends React.Component<{}, IBoards> {
    private url = "http://localhost:19489/api/boards";
    
    constructor(props: any) {
        super(props);
        this.state = {boards: []};
        // this.getBoards();
        // fetch('http://localhost:19489/api/boards')
        //     .then(responce => responce.json() as Promise<IBoard[]>)
        //     .then(data => this.setState(prevState => ({boards: data})))

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
    // public getBoards() {
    //             fetch(this.url, {
    //                 method: 'GET',
    //                 // headers: {
    //                 //     'Accept': 'application/json',
    //                 //     'Content-Type': 'application/json',
    //                 //   }
    //             })
    //                 .then(responce => responce.json() as Promise<IBoard[]>)
    //                 .then(data => ({boards: data}))
                
    //         }
    
    
    public render() {
        
        return(
            
            <div>

                
                {this.state.boards.map(board => <div key={board.id}>
                    <div>{board.description} {board.title}</div>
                </div>)}
            </div>
        )
    }
}