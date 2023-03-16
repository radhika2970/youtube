import React from 'react';
import "./Videos.css";
import SingleVideo from './SingleVideo';

function Videos()
{
    return (
        <div className = "videos">
            <div className='row'>
                <SingleVideo
                thumb_img={'https://i.ytimg.com/vi/9boMnm5X9ak/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA3RW0lGSul3SbKkYL7HGzeiGMoDw'}
                profile_img="https://yt3.ggpht.com/yti/AHXOFjWSwmwNSM1I3RO-ZweOIFyhDckWqc4aDBEc1w=s88-c-k-c0x00ffffff-no-rj-mo"
                />
            </div>
        </div>
    )

}

export default Videos