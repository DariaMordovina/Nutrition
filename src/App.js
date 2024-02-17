
import { useEffect, useState } from 'react';
import './App.css';


function App() {

const[mySearch,setMySearch]=useState('');
const[myRecipes,setMyRecipes]=useState([]);


useEffect(()=>{
  const getRecipe=async ()=>{
  const response = await fetch(`https://api.edamam.com/api/nutrition-details?app_id=2d9a1e4a&app_key=b85be7470dcad301dc82f3d5e8a050fe`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify({ ingr: mySearch })
  });
  
const result = await response.json();
console.log(result);
;
}
getRecipe()
},[])

  const myRecipeSearch = (e)=>{
    console.log(e.target.value)
setMySearch(e.target.value)
  }

 

  useEffect(() => {
    if (mySearch !== '') {
      let ingr = mySearch.split(/[,,;,\n,\r]/);
      
    }
  }, [mySearch])

  return (
    <div className="App">
      <div>
        <img src="" alt="калории" />
      <h1>Рассчитайте калории!</h1>
      </div>

      <div>
        <form>
          <input placeholder='Введите продукт...' onChange={myRecipeSearch} value={mySearch} />
        </form>
      </div>

      <div>
        <button>рассчитать</button>
      </div>

{myRecipes.map((element,index)=>(
    <myNutritions key={index}
    />
  ))
}


    </div>
  );
}


export default App;
