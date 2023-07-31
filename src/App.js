import './App.css';
import './components/stylescomponents/backimg.css'
import './components/stylescomponents/bk-white'
import AlbumList from './components/album'
import CreateAlbum from './components/newalbum'
import ExcluirAlbumButton from './components/deletealbum'
import AddTrack from './components/addfaixa';
import DeleTrack from './components/deletefaixa'
import Header from './components/header';



function App() {
  return (
      <div>
      <Header />
      <div style={{ marginLeft: 60 }}>
        <AlbumList />
        <CreateAlbum />
        <ExcluirAlbumButton />
        <AddTrack />
        <DeleTrack />
      </div>
    </div>
  );
  }

export default App;
