
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import '../../../assests/css/all.mov.css'
import axios from "axios";
import OwlCarousel from 'react-owl-carousel-loop';
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'
import { NewOwl } from '../../NewOwl/NewOwl';
import { Link } from 'react-router-dom';

const TopMovies = () => {

    const responsive= {
        0: {
            items: 3.1
        },
        600: {
            items: 6
        },
        1000: {
            items: 9
        }

    }


    const [basedCom, setbasedCom] = useState([]);
    const [title, setTitle] = useState('');
    useEffect(() => {
        async function getAllStudData() {
            try {
                const basedComic = await axios.get('http://localhost:8000/titles')
                
                const requiredData = basedComic.data.find(({ title }) =>
                    title === 'Top Movie Franchises'
                )
                setTitle(requiredData.title)
                setbasedCom(requiredData.layoutTitles.titles)
              
            } catch (error) {
                console.log(error)
            }
        }
        getAllStudData()
    }, [])

    return (
        <>
          <div className='owl-main'>
            <div className='MovieCard-Data'>
            {title && <h2>{title}</h2>}
            {basedCom.length!==0 && <NewOwl Banner={basedCom} items="9" responsive={responsive} className="owl-theme basedComic"/>}
            </div>
            </div>
        </>
    )
}
export default TopMovies