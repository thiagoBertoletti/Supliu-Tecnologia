import React, { useState } from 'react';
import axios from 'axios';
import './stylescomponents/newalbum.css'

const API_URL = 'https://tiao.supliu.com.br/api/album';
const API_TOKEN = 'thg.bertoletti@gmail.com'; 

const CreateAlbum = () => {
  const [albumData, setAlbumData] = useState({
    name: '',
    year: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAlbumData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(API_URL, albumData, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'thg.bertoletti@gmail.com',
        },
      });

      console.log('Novo álbum criado:', response.data);
    } catch (error) {
      console.error('Erro ao criar álbum:', error);
    }
  };

  return (
    <div>
      <h2 className='novo-album'>Crie um novo álbum</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label className='nome-input'>Nome do álbum:</label>
          <input className='input-nome'
            type="text"
            name="name"
            value={albumData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className='ano-input'>Ano do álbum:</label>
          <input className='input-ano'
            type="text"
            name="year"
            value={albumData.year}
            onChange={handleChange}
            required
          />
        </div>
        <button className='criar-button' type="submit">Criar álbum</button>
      </form>
    </div>
  );
};

export default CreateAlbum;
