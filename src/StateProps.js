import React,{Component} from 'react'
// import Operan  from './operan';

export default class StateProps extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            makanan: 'Bakso',
            minuman: 'teh'
        }
    }
    gantiMakanan = (makanan_baru) => {
        this.setState ({
            makanan: makanan_baru
        })
    }
    render() {
        return (
            <div>
                <h2>{this.state.makanan}</h2>
                <button onClick={() => this.gantiMakanan('Soto')}>Ganti makanan</button>
                {/* <Operan makanan = {this.state.makanan}/> */}
                <h2>{this.state.minuman}</h2>
                <button onClick={() => this.setState({minuman:'jus'})}>Ganti minuman</button>
            </div>
        )
    }
}