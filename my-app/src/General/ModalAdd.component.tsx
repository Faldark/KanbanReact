import * as React from "react";

import { action, observable } from "mobx";
import { observer } from "mobx-react";
import * as Modal from 'react-modal';




interface IProps {
    url: string,
    headername: string,
    modal: boolean
    onAdd: (trigger: boolean) => void
}
interface IState {
    title: string,
    description: string
}

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

@observer
export class ModalAddComponent extends React.Component<IProps, IState> {

    @observable public modal: boolean = false;


    constructor(props: IProps) {
        super(props);
        this.state = {
            description: "",
            title: ""
        }
        this.modal = props.modal;
        this.toggle = this.toggle.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.add = this.add.bind(this);
    }

    @action public toggle() {
        this.modal = !this.modal;
    }

    public add = (e:any) => {
         e.preventDefault();
        
        fetch(this.props.url, {
            body: JSON.stringify({
                description: this.state.description,
                title: this.state.title,
            }),

            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
        })
            
            .then(() => this.toggle())
            .then(() => this.props.onAdd(true))
    }
    public handleChange(event: any) {
        // // tslint:disable-next-line:no-console
        // console.log(event.target.name, event.target.value);
        this.setState({ [event.target.name]: event.target.value})
    }

    @action public componentWillReceiveProps(nextProps: IProps) {
        this.modal = nextProps.modal;
    }


    public render() {
        return (
        <div>
        <Modal
        isOpen={this.modal}
        onRequestClose={this.toggle}
        style={customStyles}
        contentLabel={this.props.headername}
        ariaHideApp={false}
        >
            <h1>Add new {this.props.headername}</h1>
            <form  onSubmit={this.add}>
                <div className="form-group">
                    <input type="text"  name="title" className="form-control input-md" placeholder="Title" onChange={this.handleChange}/>
                </div>

                <div className="form-group">
                    <input type="text"  name="description" className="form-control input-md" placeholder="Description" onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <div className="btn-group">
                        <button  style={{marginRight: '5px'}} className="btn btn-success btn-md" onClick={this.toggle}>Cancel</button>
                        <input type="submit"  className="btn btn-success " value="Submit"/>
                    </div>
                </div>
            </form>
        </Modal>
</div>
      
        )
    }

}