import React, { Component } from 'react';
import axios from "axios";
class DeleteIp extends Component {
    
    handleSubmit = event => {
        event.preventDefault();
        const url = `http://localhost:28852/api/antifraud/suspicious-ip/+event.ip`;
        const base64encodedData = localStorage.getItem("Authorization");
        event.preventDefault();
        const ip = {
            ip: this.state.ip
        }
        console.log(ip)
        axios.delete(`http://localhost:28852/api/antifraud/suspicious-ip/`+this.state.ip,{
            headers: {
                Authorization: base64encodedData,
            },
        });
    }
    handleChange = event => {
        this.setState({ ip: event.target.value });
    }
    render() {
        return (

            <form onSubmit={this.handleSubmit}>
    
                 <input type="text" name="ip" onChange={this.handleChange} />
                <button type="submit" > DELETE </button>
            </form>
        );
    }
}
export default DeleteIp;