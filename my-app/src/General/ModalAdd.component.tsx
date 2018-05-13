import { observer } from "mobx-react";
import * as React from "react";

import { Button, Modal,ModalBody,ModalFooter, ModalHeader   } from "reactstrap";


interface IProps {
    url: string,
    headername: string,
    modal: boolean
}
interface IState {
    title: string,
    description: string,
    modal: boolean
}

@observer
export class ModalAddComponent extends React.Component<IProps, IState > {
    
    constructor(props: IProps) {
        super(props);
        this.state = {
            description: "",
            modal: props.modal,
            title : "",
           
            
            
        }
        this.toggle = this.toggle.bind(this);
    }

    public toggle() {
        this.setState({
            modal: !this.state.modal
        })
    }

    public add() {
        fetch(this.props.url, {
            body: JSON.stringify({
                description: this.state.description,
                title: this.state.title,
                
                
            }),
            
            method: 'POST',
            
        })
            .then(responce => responce.json())
            // .then(data => this.setState({boards: data.boards}))
    }

    public render() {
        return (
            <div>

                    
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}> Add new {this.props.headername}</ModalHeader>
                    <ModalBody>
                        
                        TEST BODY
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary">Add</Button>
                        <Button color="primary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }

}