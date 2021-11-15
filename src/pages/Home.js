import React,{useState,useEffect} from "react";
import SearchForm from "../component/SearchForm";
import CocktailList from "../component/CocktailList";

export default function Home() {
const[searchTerm, setSearchTerm]= useState("");
const[cocktails, setCocktails] = useState([]);
const[loading, setLoading] = useState(false)

useEffect(() => {
  setLoading(true)
 const getCocktails = async ()=>{
   try {
     const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`)
   const data = await response.json();
   const{drinks} = data
   if(drinks){
const newCocktails = drinks.map(item=>{
  const{idDrink,strDrink, strGlass,strDrinkThumb,strAlcoholic} = item;
  return {
    id:idDrink,name:strDrink,image:strDrinkThumb,glass:strGlass,info:strAlcoholic
  }
});
setCocktails(newCocktails)
   }else{
     setCocktails([])
   }
   
   } catch (error) {
     console.log(error);
   }
   setLoading(false)
 }

   getCocktails()
}, [searchTerm])
  
 
  return (
    <main>
    <SearchForm searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
    <CocktailList loading={loading} cocktails={cocktails}/>
    </main>
  );
}
