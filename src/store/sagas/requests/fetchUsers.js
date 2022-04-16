
const url = 'http://localhost:8000/titles';


const fetchGetUsers = () => {
  return fetch(url, {
    method: "GET",
  })
    .then((response) => response.json())
    .catch((error) => {
      throw error;
    });

 

//   useEffect(() => {
//     async function getAllStudData() {
//         try {
//             const basedComic = await axios.get(url)  
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
};

export default fetchGetUsers;
