import React from 'react';
import axios from 'axios';
import './stylescomponents/deletefaixa.css'

const DeleteTrack = ({ trackId }) => {
  const handleDelete = async () => {
    try {
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'thg.bertoletti@gmail.com', 
      };

      await axios.delete(`https://tiao.supliu.com.br/api/track/${trackId}`, { headers });

      console.log('Faixa excluída com sucesso.');
    } catch (error) {
      console.error('Erro ao excluir faixa:', error);
    }
  };

  return (
    <div>
      <button className='delete-fx-button' onClick={handleDelete}>Excluir Faixa</button>
    </div>
  );
};

export default DeleteTrack;
