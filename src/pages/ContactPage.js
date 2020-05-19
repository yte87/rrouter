import React from 'react';
import '../styles/ContactPage.css';
import {Prompt} from 'react-router-dom';
class ContactPage extends React.Component{
    state = {
        value: "",
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            value: ""
        })
    }

    handleChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }
   render()
{
    return (
        <div className="contact">
            <form>
                <h3>Napisz</h3>
                <textarea value={this.state.value} onChange={this.handleChange} placeholder="Wpisz wiadomosc"></textarea>
                <button>Wyslij</button>
            </form>
            <Prompt
            
            when={this.state.value}
            message="masz niewypelniony formularz, chcesz przejsc dalej?"

            />
        </div>
    );
}   
}

export default ContactPage;