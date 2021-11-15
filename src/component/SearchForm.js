import React,{useRef,useEffect} from "react";

export default function SearchForm({setSearchTerm}) {

 const searchValue = useRef('');

 useEffect(() => {
  searchValue.current.focus()
 }, [])

  const handleSubmit= (e)=>{
    e.preventDefault();
  }

  const handleChange = ()=>{
    setSearchTerm(searchValue.current.value);
  }

  return (
    <div>
    <h1 className="section-title">
    Search Cocktail
    </h1>
    <form className="form search-form" onSubmit={handleSubmit}>
      <div className="form-control">
      <label htmlFor="name">Search your favorite Cocktail</label>
    <input type="text" name="name" id="name"
    onChange={handleChange} ref={searchValue}/>
    </div>
    </form>
    </div>
  )
}
