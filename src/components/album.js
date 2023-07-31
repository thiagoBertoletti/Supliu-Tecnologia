import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AlbumList = () => {
  const [keyword, setKeyword] = useState('');
  const [loading, setLoading] = useState(false);
  const [albums, setAlbums] = useState([]);
  const [albumIdToDelete, setAlbumIdToDelete] = useState('');
  const [tracks, setTracks] = useState([]); 
  const [trackIdToDelete, setTrackIdToDelete] = useState(''); 

  const urlAPI = 'https://tiao.supliu.com.br/api/album';
  const token = 'thg.bertoletti@gmail.com'; 

  const fetchAlbums = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${urlAPI}?keyword=${keyword}&limit=10&page=1`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'thg.bertoletti@gmail.com',
        },
      });

      setAlbums(response.data.results || []);
      console.log(response.data);
    } catch (error) {
      console.error('Erro ao buscar álbuns:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    fetchAlbums();
  };

  const handleDeleteAlbum = async () => {
    try {
      setLoading(true);
      await axios.delete(`${urlAPI}/${albumIdToDelete}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'thg.bertoletti@gmail.com',
        },
      });
      await fetchAlbums();
    } catch (error) {
      console.error('Erro ao excluir álbum:', error);
    } finally {
      setLoading(false);
      setAlbumIdToDelete('');
    }
  };

  const handleFetchTracks = async (albumId) => {
    try {
      setLoading(true);
      const response = await axios.get(`${urlAPI}/${albumId}/tracks`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'thg.bertoletti@gmail.com',
        },
      });
      setTracks(response.data.results || []);
    } catch (error) {
      console.error('Erro ao buscar as faixas:', error);
    } finally {
      setLoading(false);
    }
  };


  return (
    <div>
      <input className='search-input'
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Digite o nome do álbum"
      />
      <button className='search-button' onClick={handleSearch}>Procurar</button>

      {loading ? (
        <p style={{ marginLeft: 500, fontSize: 30 }}>Carregando...</p>
      ) : albums.length === 0 ? (
        keyword.trim() !== '' && <p style={{ marginLeft: 450, fontSize: 30 }}>Nenhum álbum encontrado.</p>
      ) : (
        <div>
          <h2>Lista de Álbuns</h2>
          <ul>
            {albums.map((album) => (
              <li key={album.id}>
                <strong>{album.name}</strong> - {album.year}
                <button onClick={() => handleFetchTracks(album.id)}>Ver Faixas</button>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div>
        <h2 className='excluir-alb'>Excluir Álbum</h2>
        <input className='excluir-input'
          type="text"
          value={albumIdToDelete}
          onChange={(e) => setAlbumIdToDelete(e.target.value)}
          placeholder="ID do álbum"
        />
        <button className='excluir-button' onClick={handleDeleteAlbum}>Excluir</button>
      </div>

      {tracks.length > 0 && (
    <div>
      <h2>Faixas do Álbum</h2>
      <ul>
        {tracks.map((track) => (
          <li key={track.id}>
            <strong>{track.name}</strong> - {track.duration}
          </li>
        ))}
      </ul>
    </div>
  )}

  {trackIdToDelete !== '' && (
    <div>
      <h2>Excluir Faixa</h2>

    </div>
  )}
    </div>
  );
};

export default AlbumList;
