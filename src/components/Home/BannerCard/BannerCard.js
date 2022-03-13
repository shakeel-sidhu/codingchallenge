
import React from 'react';
import './BannerCard.css';
import { NewOwl } from '../../NewOwl/NewOwl';
import { useEffect, useState } from 'react';
import axios from 'axios';

const BannerCard = () => {

     const responsive= {
            0: {
                items: 1
            },
            600: {
                items: 1.6
            },
            1100: {
                items: 1.7
            }
        }
    

    const [Banner, setBannner] = useState([]);
 
    useEffect(() => {
        axios.get('http://localhost:8000/titles')
            .then((res) => {
                const requiredData = res.data.find(({ title }) =>
                    title === 'Hero Banner'
                )
                setBannner(requiredData.layoutTitles.titles)
            
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])
    return (
        <>
            <div>
               {Banner.length!==0 && <NewOwl Banner={Banner} items="2" responsive={responsive} className='owl-theme Banner-Nv'/>}
            </div>
        </>
    )

}
export default BannerCard