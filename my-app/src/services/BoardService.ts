// import { IBoards } from "../interfaces/IBoards";

// export class BoardService {
//     private url = "http://localhost:19489/api/boards";

//     public boards: IBoards;

//     public getBoards() {
//         fetch(this.url, {
//             method: 'GET',
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json',
//               }
//         })
//             .then(responce => responce.json())
//             .then(data => this.boards = data)

//             return this.boards;
//     }
// }