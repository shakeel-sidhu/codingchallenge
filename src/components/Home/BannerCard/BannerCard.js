
import React from 'react';
import './BannerCard.css';
import '../../../assests/css/all.mov.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import BannerCardOwl from './BannerCardOwl.js/BannerCardOwl';
import { useSelector } from 'react-redux';
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

        const data = useSelector(users => users.users)

        const bannerData = data.users.filter(({title})=>
        title === 'Hero Banner'
        )
        
        

    // const [Banner, setBannner] = useState([]);
 
    // useEffect(() => {
    //     axios.get('http://localhost:8000/titles')
    //         .then((res) => {
    //             const requiredData = res.data.find(({ title }) =>
    //                 title === 'Hero Banner'
    //             )
    //             setBannner(requiredData.layoutTitles.titles)
            
    //         })
    //         .catch((err) => {
    //             console.log(err)
    //         })
    // }, [])
    return (
        <>
            <div>
            {bannerData && bannerData.map ((item, index) => {
                    return (
                    <BannerCardOwl key={index}  data={item.layoutTitles.titles} title={item.title} responsive={responsive}/> 
                )})}
            </div>
        </>
    )

}
export default BannerCard