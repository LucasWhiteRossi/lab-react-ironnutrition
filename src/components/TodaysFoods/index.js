export function TodaysFoods (props){
    
    function handleTodaysFoodIncrement(listItem){
            const oldStatement = props.todaysFoods.filter((a) => a.includes(listItem.split(" ")[1]))
            console.log(oldStatement)
            const oldCalories = parseInt(oldStatement[0].split(' ')[3])
            const filteredArray = props.todaysFoods.filter((a) => !a.includes(listItem.split(" ")[1]))
            props.setTodaysFoods([...filteredArray])
            props.setCalories(props.calories - oldCalories)
    }
    
    return (
        <div className="mx-10">
            
            <h1 className="is-size-2">Today's Foods</h1>
            <ul>
                {props.todaysFoods.map((currentElement)=>{
                    return <li className="py-1">{currentElement} <button className="button is-danger is-small" onClick={()=>handleTodaysFoodIncrement(currentElement)}>Eliminar</button></li>
                })}
            </ul>
            <p>{`Total: ${props.calories} cal`}</p>
        </div>
    );
}