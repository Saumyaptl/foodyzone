import styled from 'styled-components'
import { useState } from 'react';
import { useEffect } from 'react';
import Searchresult from './components/Searchresult';
 export const DATA_URL = "http://localhost:9000";
const App = () => {
const [data, setData] = useState(null);
const[error, setError] = useState(null);
const[loading, setLoading] = useState(false);
const[filtered, setFiltered] = useState(null);
useEffect (()=>{
  const fetchdata = async ()=>{
 setLoading(true);
    try{
    const response = await fetch(DATA_URL);
    const jsondata = await response.json();

    setData(jsondata);
    setFiltered(jsondata)
    setLoading(false)
    } catch(e){
      setError("Data not fetched")
    }
  }
  fetchdata();
}, [])
const searchFood = (e)=>{
  const searchValue = e.target.value;
  if(searchValue==='') {
    setFiltered(null);
  }
  const filterValue = data?.filter((food)=>{
    return(
      food.name.toLowerCase().includes(searchValue.toLowerCase())
    )
  })
  setFiltered(filterValue)
  console.log(filterValue)
}
const filteredFood = (type)=>{

  if(type==="all"){
   return setFiltered(data)
  }
  const filterfood= data.filter((food)=>{
    return(
    food.type.toLowerCase().includes(type.toLowerCase()))
  })
  setFiltered(filterfood)
}

if(error) return  <div>{error}</div>
if(loading) return <div>{"loading"}</div>
  return <>
  <Container>
    <Topcontainer>
     <div className="logo">
      <img src="/Foody Zone.svg"/>
     </div>
     <div className="search">
      <input type="search" placeholder='Search Food' onChange={searchFood} />
     </div>
    </Topcontainer>
    <Fiterontainer>
      <Button  onClick={()=>
        filteredFood("all")}>
        All
      </Button>
      <Button onClick={()=>
        filteredFood("breakfast")}>
        Break Fast
      </Button>
      <Button  onClick={()=>
        filteredFood("lunch")}>
        Lunch
      </Button>
      <Button  onClick={()=>
        filteredFood("dinner")}>
        Dinner
      </Button>
    </Fiterontainer>
  
  </Container>
  <Searchresult data={filtered} DATA_URL={DATA_URL} />
  </>
  ;
};
export default App;
 export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`
const Topcontainer = styled.div`
  height:  140px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  .search {
    input {
      background-color: transparent;
      border: 1px solid red;
      color: white;
      border-radius: 5px;
      height: 40px;
      font-size: 16px;
      padding: 0 10px;
    }}

    @media (0<width<600px) {
      display: flex;
      flex-direction: column;
      height: 120px;
    }
`
const Fiterontainer = styled.section`
 display: flex;
  justify-content: center;
  gap: 12px;
  padding-bottom: 40px;
`
export const Button = styled.button`
  background: #FF4343;
  padding: 6px 12px;
  border-radius:5px;
  border: none;
  cursor: pointer;

`
