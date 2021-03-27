import React from 'react';
import "../styles/body.css"

import SongRow from "./song.row";
import Header from "./header";
import {useDataLayerValue} from "../context/data.layer";
import {PlayCircleFilled, Favorite, MoreHoriz} from '@material-ui/icons'

const Body = ({spotify}) => {
    const [{discover_weekly}, dispatch] = useDataLayerValue();

    return (
        <div className={'body'}>
            <Header spotify={spotify}/>
            <div className={'body__info'}>
                <img src={discover_weekly?.images[0].url} alt={'discover_weekly'}/>
                <div className={'body__infoText'}>
                    <strong>PLAYLIST</strong>
                    <h2>Discover weekly</h2>
                    <p>{discover_weekly?.description}</p>
                </div>
            </div>
            <div className={'body__songs'}>
                <div className={'body__icons'}>
                    <PlayCircleFilled className={'body__shuffle'}/>
                    <Favorite fontSize={'large'}/>
                    <MoreHoriz/>
                </div>
                {discover_weekly?.tracks.items.map(i => <SongRow track={i.track}/>)}
            </div>
        </div>
    );
};

export default Body;