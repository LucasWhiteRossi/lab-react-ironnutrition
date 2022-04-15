import React from 'react';
import { useState } from 'react';
import {FoodBox} from './components/FoodBox'
import { FoodRegister } from './components/FoodRegister';
import { Search } from './components/Search';
import { TodaysFoods } from './components/TodaysFoods';
import foods from './foods.json';

function App() {

  const [isActive,setIsActive] = useState(false)
  const [foodList, setFoodList] = useState([...foods])
  const [filteredFoodList, setFilteredFoodList] = useState([...foodList])
  const [todaysFoods, setTodaysFoods] = useState([])
  const [calories, setCalories] = useState(0)
  
  function newRegister(){
    setIsActive(true)
  }

  return (
    <div className="App">
      <h1 className="m-4 is-size-1">IronNutrition</h1>
      <Search foodList={foodList} setFilteredFoodList={setFilteredFoodList}/>
      <button 
      className="js-modal-trigger button is-success m-4"
      data-target="modal-register-food"
      onClick={newRegister} 
      setIsActive = {setIsActive}
      >
        Registrar novo Alimento
      </button>
      <div className="is-flex">
        <div className=''>
          {filteredFoodList.map((food)=>{
            return <FoodBox food={food} setFoodList={setFoodList} foodList={foodList} todaysFoods={todaysFoods} setTodaysFoods={setTodaysFoods} calories={calories} setCalories={setCalories}/>
          })}
        </div>
        <div>
          <TodaysFoods todaysFoods={todaysFoods} setTodaysFoods={setTodaysFoods} calories={calories} setCalories={setCalories}/>
        </div>
        
      </div>
      {isActive && <FoodRegister setIsActive = {setIsActive} foodList={foodList} setFoodList={setFoodList} setFilteredFoodList={setFilteredFoodList}/>}
    </div>
  );
}

export default App;
