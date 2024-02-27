import React, { useState, useEffect}from "react";
const url="https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const Final=()=>{
    const [drink,setdrinks]=useState([]);
    const [searchterm,setsearch]= useState(['']);
    const [loading,setloading] = useState(false);
    const [iserror,seterror] =useState({status:false,msg:''});
    const fetchdrinks=async (apiurl)=>{
        setloading(true)
        seterror({status:false, msg:''})
        try {
            const response = await fetch(apiurl);
        const {drinks}= await response.json(); 
        setdrinks(drinks);
        setloading(false);
        seterror({status:false, msg:''})
        if(!drinks) {
            throw new Error("data not found");
        }
        } catch (error) {
            console.log(error);
            setloading(false);
            seterror({status:true, msg:error.msg||'something is wrong, please try again'});
        }
    };

    useEffect(()=>{
        const correcturl= `${url}${searchterm}`;
        fetchdrinks(correcturl);
    },[searchterm]);
    return(
        <div>
            <form>
                <input type="text" name="search" id="serach" 
                placeholder="search something new..."
                value={searchterm}
                onChange={(e) =>setsearch(e.target.value)}/>
            </form>
            <hr/>
            {loading && !iserror?.status && <h3>Loading...</h3>}
            {iserror?.status&& <h3 style={{color:'red'}}>{iserror.msg}</h3>}
           {
            !loading && !iserror?.status && <ul className="cocktail-data">
            {
                drink.map((eachdrink)=>{
                    const {idDrink, strDrink, strDrinkThumb}= eachdrink;
                    return <li key={idDrink}>
                        <div>
                            <img src={strDrinkThumb} alt={strDrink}/>
                        </div>
                        <div className="text">
                            <h3>{strDrink}</h3>
                        </div>
                    </li>
                })
            }
        </ul>
           }
        </div>
    )
}
export default Final;