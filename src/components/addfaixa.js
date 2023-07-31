import React, { useState } from 'react';
import axios from 'axios';
import './stylescomponents/addfaixa.css'

const AddTrack = () => {
  const [trackData, setTrackData] = useState({
    album_id: '',
    number: '',
    title: '',
    duration: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTrackData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'https://tiao.supliu.com.br/api/track',
        trackData,
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'thg.bertoletti@gmail.com', 
          },
        }
      );

      setTrackData({
        album_id: '',
        number: '',
        title: '',
        duration: '',
      });

      console.log('Track added successfully:', response.data);
    } catch (error) {
      console.error('Error adding track:', error);
    }
  };

  return (
    <div className='conteudo'>
      <h2 className='add-faixa'>Adicionar Faixa</h2>
      <form onSubmit={handleSubmit}>
        <label className='label-id' style={{ display: 'block' }}>
          ID do Álbum:
          <input  className='album-input'
            type="text"
            name="album_id"
            value={trackData.album_id}
            onChange={handleChange}
            required
          />
        </label>
        <label className='label-num' style={{ display: 'block' }}>
          Número da Faixa:
          <input className='numero-fx-input'
            type="number"
            name="number"
            value={trackData.number}
            onChange={handleChange}
            required
          />
        </label>
        <label className='label-musica' style={{ display: 'block' }}>
          Nome da Música:
          <input className='nome-fx-input'
            type="text"
            name="title"
            value={trackData.title}
            onChange={handleChange}
            required
          />
        </label>
        <label className='label-duracao' style={{ display: 'block' }}>
          Duração (segundos):
          <input className='numeroDur-fx-input'
            type="number"
            name="duration"
            value={trackData.duration}
            onChange={handleChange}
            required
          />
        </label>
        <button className='add-fx-button' type="submit">Adicionar Faixa</button>
      </form>
    </div>
  );
};

export default AddTrack;
