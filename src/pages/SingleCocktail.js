import React,{useState,useEffect} from 'react';
import {useParams,Link} from "react-router-dom";


export default function SingleCocktail() {
 const{id}= useParams();
 const[cocktail,setCocktail] = useState(null)
 const [loading, setLoading] = useState(false)

 useEffect(() => {
  setLoading(true)
  const getCocktail = async ()=>{
    try {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
      const data = await response.json()
      const {drinks} = data
      console.log(response.data);
      if(drinks){
        const{strDrink:name,strAlcoholic:info,strDrinkThumb:image,strGlass:glass,strInstructions:instructions,
        strCategory:category,strIngredient1,strIngredient2,strIngredient3,strIngredient4,strIngredient5}=drinks[0]
        const ingredients = [ strIngredient1,strIngredient2,strIngredient3,strIngredient4,strIngredient5];
        const newCocktail = {name,info,category,instructions,glass,image,ingredients};
        setCocktail(newCocktail);
    }else{
      setCocktail(null);
    }
    }catch (error) {
      console.log(error);
    }
    setLoading(false);
  }
   getCocktail();
 }, [id]);

 if(loading){
   return <h2 className="section-title">Loading</h2>
 }
 if(!cocktail){
   return <h2 className="section-title"> No cocktail to display</h2>
 }
 else{
 const {name,info,category,instructions,glass,image,ingredients}=cocktail;
   return(
     <section className="section cocktail-section">
      <Link to="/" className="btn btn-primary">Back Home</Link>
      <h2 className="section-title">{name}</h2>
      <div className="drink">
        <img src={image} alt={name}/>
        <div className="drink-info">
          <p>Name: {name}</p>
          <p>Catgoty:{category}</p>
          <p>Info:{info}</p>
          <p>Glass:{glass}</p>
          <p>Instructions:{instructions}</p>
          <p>
            Ingredients:{""}
            {
              ingredients.map((item,index)=>{
                return <span key={index}>{item}</span>
              })
            }
          </p>
        </div>
      </div>
     </section>
   )
 }
}

