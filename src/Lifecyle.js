import React, { Component } from "react";
import Sublifecyle from "./Sublifecyle";

export default class Lifecycle extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            makanan: 'Bakso',
            data: {},
            tampilHalamanSub: false,
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then((json) => {
                this.setState({
                    data: json
                })
            })
    }
    ubahMakanan(value) {
        this.setState({
            makanan: value
        })
    }
    render() {

        return (
            <div>
                <h2>{this.state.makanan}</h2>

                {this.state.tampilHalamanSub && <Sublifecyle ubahMakanan={(value) => this.ubahMakanan(value)} />}

                <button onClick={() => this.setState({ tampilHalamanSub: !this.state.tampilHalamanSub })}>Tampilkan Halaman Sub</button>
            </div>
        )
    }
}