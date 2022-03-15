import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { useEffect } from 'react';
import {Msg} from '../Common/types';
import { getMsgsList } from './Home.api';


const Home: React.FC = (props) =>{
    const [msgs, setMsgs] = useState<Msg[]>()

useEffect(() => {
    
    const fetchMsgsList = async () => {
        const msgList = getMsgsList()
        console.log(msgList)
        setMsgs(await msgList)
    }
    fetchMsgsList()
}, [])


return (
    <div>
        <p> React Healthcheck Result</p>
        {JSON.stringify(msgs)}
    
    </div>
);
}

export default Home;