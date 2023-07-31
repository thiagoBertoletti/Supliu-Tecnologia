import React from 'react';
import axios from 'axios';
import './stylescomponents/deletealbum.css'

const ExcluirAlbumButton = ({ token, albumId }) => {
  const excluirAlbum = () => {
    const apiUrl = `https://tiao.supliu.com.br/api/album/${albumId}`;

    const headers = {
      'Content-type': 'application/json',
      'Authorization': 'thg.bertoletti@gmail.com'
    };

    axios.delete(apiUrl, { headers })
      .then(response => {
        console.log('Álbum excluído com sucesso!', response.data);
      })
      .catch(error => {
        console.error('Erro ao excluir o álbum:', error);
      });
  };

  return (
    <div></div>
  );
};

export default ExcluirAlbumButton;
