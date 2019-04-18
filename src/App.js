import React, {Component} from 'react';
import './App.css';
import UserInput from "./User/UserInput";
import UserOutput from "./User/UserOutput";
import Radium, {StyleRoot} from 'radium';

class App extends Component {
    state = {
        usernames: [
            {id: 8, name: "Alice"},
            {id: 6, name: "Bob"},
            {id: 5, name: 'Amanda'}
        ],
        showInput: false,
        showOutput1: true
    };

    usernameChangeHandler = (event, index) => {
        const userId = this.state.usernames.findIndex(u =>{
            return u.id === index;
            });
        const user = {...this.state.usernames[userId]};
        user.name = event.target.value;

        const users = [...this.state.usernames];
        users[userId] = user;
        this.setState({usernames: users});

    };
    deleteOutputHandler = (id) => {
        const people = [...this.state.usernames];
        people.splice(id, 1);
        this.setState({usernames: people});
    };

    toggleInputHandler = () => {
        const showedInput = this.state.showInput;
        const showedOutput1 = this.state.showOutput1;
        this.setState({showInput: !showedInput, showOutput1: !showedOutput1});
    };

    render() {
        const style = {
            backgroundColor: 'white',
            border: '1px solid blue',
            padding: '12px',
            ':hover': {
                backgroundColor: 'green'
            }
        };

        // let output1 = null;
        // if (this.state.showOutput1) {
        //     output1 = (
        //     <UserOutput style={style} name={this.state.usernames[0].name}/>
        //     );
        // }

        let list = null;
        if (this.state.showOutput1) {
            list = (
                <div>
                    {this.state.usernames.map((person, id) => {
                        return <UserOutput
                            name={person.name}
                            key={person.id}
                            click={() => this.deleteOutputHandler(id)}
                            changed={(event)=>this.usernameChangeHandler(event, person.id)}
                        />
                    })}
                </div>
            );
            style[':hover'] = {
                color: 'green'
            };
        }

        return (
            <StyleRoot>
                <div className="App">
                    <button style={style} onClick={this.toggleInputHandler}>Toggle Input</button>
                    {
                        this.state.showInput === true ?
                            <UserInput changed={this.usernameChangeHandler} currentName={this.state.usernames[1].name}/>
                            : null
                    }
                    {list}
                </div>
            </StyleRoot>
        );
    }
}

export default Radium(App);
