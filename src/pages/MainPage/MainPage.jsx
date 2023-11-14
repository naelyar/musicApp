import { Input } from '@mui/material';
import tracksList from '../../assets/tracksList';
import Track from '../../components/Track/Track';
import style from './main.module.scss'
import { useState } from 'react';

const runSearch = (query) => {
    if (!query) {
        return tracksList;
    }
    const lowerCaseQuery = query.toLowerCase()

    return tracksList.filter((track) =>
        track.title.toLowerCase().includes(lowerCaseQuery) ||
        track.artists.toLowerCase().includes(lowerCaseQuery)
     )
}

const MainPage = () => {

    const [tracks, setTracks] = useState(tracksList)
    const handleChange = (event) => {
        const foundTracks = runSearch(event.target.value);
        setTracks(foundTracks)
    }
    return <div className={style.search}>
        <Input className={style.input} placeholder='Поиск треков' onChange={handleChange}> </Input>
        <div className={style.list}>
            {
                tracks.map((track) => <Track {...track} key={track.id} />  )
            }
        </div>
    </div>
 }

export default MainPage;