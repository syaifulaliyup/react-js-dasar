import React, { Component } from 'react';
import NavbarComponent from './NavbarComponent';
import Table from './Table';
import Formulir from './Formulir';

export default class Crud extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bukus: [],
      nama: '',
      deskripsi: '',
      harga: '0',
      id: '',
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.id === '') {
      this.setState({
        bukus: [
          ...this.state.bukus,
          {
            id: this.state.bukus.length + 1,
            nama: this.state.nama,
            deskripsi: this.state.deskripsi,
            harga: this.state.harga

          },

        ],
      });
    } else {
      const updatedBooks = this.state.bukus
        .filter((buku) => buku.id !== this.state.id)
        .map((filterBuku) => {
          return filterBuku
        });

      this.setState({
        bukus: [
          ...updatedBooks,
          {
            id: this.state.bukus.length + 1,
            nama: this.state.nama,
            deskripsi: this.state.deskripsi,
            harga: this.state.harga
          },
        ],
      });
    }
    this.setState({
      nama: '',
      deskripsi: '',
      harga: '0',
      id: '',
    });
  };

  editData = (id) => {
    console.log("id buku", id)
    const updatedBooks = this.state.bukus
      .filter((buku) => buku.id === id)
      .map((filterBuku) => {
        return filterBuku
      });

    this.setState({
      nama: updatedBooks[0].nama,
      deskripsi: updatedBooks[0].deskripsi,
      harga: updatedBooks[0].harga,
      id: updatedBooks[0].id,
    });
  };

  hapusData = (id) => {
    const bukuBaru = this.state.bukus
      .filter((buku) => buku.id !== id)
      .map((filterBuku) => {
        return filterBuku
      })

    this.setState({
      bukus: bukuBaru
    })
  }

  render() {
    return (
      <div>
        <NavbarComponent />
        <div className='container mt-4'>
          <Table bukus={this.state.bukus} editData={this.editData} hapusData={this.hapusData} />
          <Formulir
            {...this.state}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </div>
      </div>
    );
  }
}
