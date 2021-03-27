import React from 'react';
import '../styles/header.css'
import {Search} from '@material-ui/icons'
import {Avatar} from "@material-ui/core";
import {useDataLayerValue} from "../context/data.layer";
const Header = () => {
    const [{user}, dispatch] = useDataLayerValue();
    return (
        <div className={'header'}>
            <div className={'header__left'}>
                <Search/>
                <input placeholder={'Search for Artists, songs...'} type={'text'}/>
            </div>
            <div className={'header__right'}>
                <Avatar src={user?.images[0]?.url} alt={user?.display_name}/>
                <h4>{user?.display_name}</h4>
            </div>
        </div>
    );
};

export default Header;