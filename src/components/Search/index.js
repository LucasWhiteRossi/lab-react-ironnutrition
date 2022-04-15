export function Search(props){
    
    function filteringFoods(e){
        props.setFilteredFoodList(props.foodList.filter((currentFood)=>currentFood.name.toLowerCase().includes(e.target.value.toLowerCase())))
    }
    
    return (
        <div className="m-4">
            <input 
                name="busca"
                type="text"
                className="input"
                placeholder="Busque seu alimento"
                onChange={filteringFoods}></input>
        </div>
    );
}