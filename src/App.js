
import { useEffect, useState } from 'react';
import './App.css';
import myNutritions from './myNutritions';

function App() {

const[mySearch,setMySearch]=useState('');
const[myRecipes,setMyRecipes]=useState([]);
const[wordSubmitted,setWordSubmitted]=useState('');



  const getRecipe=async (ingr)=>{
  const response = await fetch(`https://api.edamam.com/api/nutrition-details?app_id=2d9a1e4a&app_key=b85be7470dcad301dc82f3d5e8a050fe`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify({ ingr: ingr})
  });
  
const result = await response.json();
console.log(result);
setMyRecipes(result)
;
}


  const myRecipeSearch = (e)=>{
    console.log(e.target.value)
setMySearch(e.target.value)
  }

 

  useEffect(() => {
    if (wordSubmitted !== '') {
      let ingr = wordSubmitted.split(/[,,;,\n,\r]/);
      getRecipe(ingr)
    }
  }, [wordSubmitted])

  const finalSearch=(e)=>{
e.preventDefault();
setWordSubmitted(mySearch);
  }

  return (
    <div className="App">
      <div>
        <img src="" alt="калории" />
      <h1>Рассчитайте калории!</h1>
      </div>

      <div>
        <form onSubmit={finalSearch}>
          <input placeholder='Введите продукт...' onChange={myRecipeSearch} value={mySearch} />
        </form>
      </div>

      <div>
        <button onClick={finalSearch}>рассчитать</button>
      </div>
      
        { <h2>{wordSubmitted}</h2>} {<p> {myRecipes.calories} kcal</p>
        }
{/*         
        {
          wordSubmitted && Object.values(myRecipes.totalNutrients)
            .map(({ label, quantity, unit }) =>
              <myNutritions
                label={label}
                quantity={quantity}
                unit={unit}
              />
            )
        }  */}


    </div>
  );
}


export default App;
