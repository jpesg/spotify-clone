import React from 'react';
import "../styles/sidebar.css"
import SidebarOption from "./sidebar.option";
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import {useDataLayerValue} from "../context/data.layer";

const Sidebar = () => {
    const [{playlists}, dispatch] = useDataLayerValue();
    return (
        <div className={'sidebar'}>
            <img className={'sidebar__logo'} src={'https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg'} alt={'logo'}/>
            <SidebarOption title={'Home'} Icon={HomeIcon}/>
            <SidebarOption title={'Search'} Icon={SearchIcon}/>
            <SidebarOption title={'Your Library'} Icon={LibraryMusicIcon}/>

            <hr/>
            <strong className={'sidebar__title'}>PLAYLISTS</strong>
            <hr/>
            {playlists?.items?.map(playlist => <SidebarOption key={playlist.name} title={playlist.name}/>)}
        </div>
    );
};

export default Sidebar;