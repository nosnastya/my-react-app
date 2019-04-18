import React, {Component} from 'react';
import './App.css';
import ValidationComponent from './Person/ValidationComponent';
import CharComponent from './Person/CharComponent';
import Radium from 'radium';

class App extends Component {
    state = {
        text: 'Some text'
    };
    textShowHandler = (event) => {
        let newText = {...this.state.text};
        newText = event.target.value;
        this.setState({text: newText});
    };

    deleteCharHandler = (id) => {
        const textArr = this.state.text.split('');
        textArr.splice(id, 1);
        const newTextArr = textArr.join('');
        this.setState({text: newTextArr})
    };

    render() {
        const list = this.state.text.split('').map((letter, id) =>{
            return <CharComponent
                click={()=>this.deleteCharHandler(id)}
                key={id}
                charK={letter}/>
        });


        return (
            <div>
                <input type="text" onChange={(event) => this.textShowHandler(event)}/>
                <p>{this.state.text}</p>
                <ValidationComponent textLength={this.state.text.length}/>
                {list}
            </div>
        )
    }
}

export default Radium(App);
