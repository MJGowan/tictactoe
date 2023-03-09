import React from 'react';
import audioFile from '../../assets/otgw.mp3';

export default function AudioPlayer(){
    return (
        <div>
            <audio controls autoPlay loop className='audio'>
                <source src={audioFile}/>
            </audio>
        </div>
    )
}