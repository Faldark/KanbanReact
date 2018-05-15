import * as React from "react";
import * as Modal from 'react-modal';
import { observable, action } from "mobx";



const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

interface IProps {
    modal: boolean
}

export class ModalConfirmationComponent extends React.Component<IProps> {
    
    @observable public modal: boolean = false;

    constructor(props: any) {
        super(props);
        this.toggle = this.toggle.bind(this);
    }

    @action public toggle() {
        this.modal = !this.modal;
    }

    public render() {
        return (
            <div>
                <Modal isOpen={this.modal} onRequestClose={this.toggle} style={customStyles}>
                <h1>Confirm your choise</h1>
                <div className="btn-group">
                    <button  style={{marginRight: '5px'}} className="btn btn-success btn-md" onClick={this.toggle}>Cancel</button>
                    <button  style={{marginRight: '5px'}} className="btn btn-success btn-md" onClick={this.toggle}>OK</button>
                </div>
                </Modal>
            </div>
        )
    }
}