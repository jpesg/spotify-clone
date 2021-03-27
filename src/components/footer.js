import React from 'react';
import '../styles/footer.css';
import {PlayCircleOutline, SkipPrevious, SkipNext, Shuffle, Repeat, PlaylistPlay, VolumeDown} from '@material-ui/icons'
import {Grid, Slider} from "@material-ui/core";

const Footer = () => {
    return (
        <div className={'footer'}>
            <div className={'footer__left'}>
                <img src={''} className={'footer__albumLogo'}/>
                <div className={'footer__songInfo'}>
                    <h4>Yeah</h4>
                    <p>sldjflskdf</p>
                </div>
            </div>
            <div className={'footer__center'}>
                <Shuffle className={'footer__green'}/>
                <SkipPrevious className={'footer__icon'}/>
                <PlayCircleOutline className={'footer__icon'} fontSize={'large'}/>
                <SkipNext className={'footer__icon'}/>
                <Repeat className={'footer__green'}/>
            </div>
            <div className={'footer__right'}>
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlay/>
                    </Grid>
                    <Grid item>
                        <VolumeDown/>
                    </Grid>
                    <Grid item xs>
                        <Slider /*aria-labelledby={'continuous-slide'} *//>
                    </Grid>
                </Grid>

            </div>
        </div>
    );
};

export default Footer;