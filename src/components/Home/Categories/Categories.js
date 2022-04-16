import React from 'react';
import { useEffect } from 'react';
import '../../../assests/css/all.mov.css'
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'
import { NewOwl } from '../../NewOwl/NewOwl';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {getUsers} from '../../../store/actions'

const Categories = () => {

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
    const dispatch = useDispatch()
    const data = useSelector(users => users.users)

    const requiredData =data.users.filter(({ title }) =>
        title !== 'Hero Banner'
      )
    useEffect(()=>{
        dispatch(getUsers());
    },[])

    // const [basedCom, setbasedCom] = useState([]);
    // useEffect(() => {
    //     async function getAllStudData() {
    //         try {
    //             const basedComic = await axios.get('http://localhost:8000/titles')  
    //             const requiredData = basedComic.data.filter(({ title }) =>
    //                 title !== 'Hero Banner'
    //             )
    //             setbasedCom(requiredData) 

    //         } catch (error) {
    //             console.log(error)
    //         }
    //     }
    //     getAllStudData()
    // }, [])

    return (
        <>
  
            <div className='MovieCard-Data'>
            {requiredData && requiredData.map ((item, index) => {
                    return (
                    <NewOwl key={index}  data={item.layoutTitles.titles} title={item.title} responsive={responsive}/> 
                )})}
            </div>
            
        </>
    )
}
export default Categories