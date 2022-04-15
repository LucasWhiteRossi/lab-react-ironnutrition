import {useState} from 'react'

export function FoodBox(props){
    
    const [quant,setQuant] = useState(props.food.quantity)

    function handleQuantityIncrement(e){
        const indexNum = props.foodList.map((currentElement)=>currentElement.name).indexOf(props.food.name)
        if (parseInt(e.target.value)>=0){
            props.foodList[indexNum]['quantity'] = parseInt(e.target.value)
            setQuant(parseInt(e.target.value))
        }
    }

    function handleTodaysFoodIncrement(e){
        if (props.todaysFoods.filter((a) => a.includes(props.food.name)).length < 1){
            props.setTodaysFoods([...props.todaysFoods,`${quant} ${props.food.name} = ${quant * props.food.calories} cal`])
        } else {
            const oldStatement = props.todaysFoods.filter((a) => a.includes(props.food.name))
            const oldQuantity = parseInt(oldStatement[0].split(' ')[0])
            const oldCalories = parseInt(oldStatement[0].split(' ')[3])
            const filteredArray = props.todaysFoods.filter((a) => !a.includes(props.food.name))
            props.setTodaysFoods([...filteredArray,`${quant + oldQuantity} ${props.food.name} = ${quant * props.food.calories + oldCalories} cal`])
        }
        
        if (props.calories){
            props.setCalories(props.calories + quant * props.food.calories)
        } else props.setCalories(quant * props.food.calories)
        
    }

    return (
        <div className="box">
    <article className="media">
        <div className="media-left">
        <figure className="image is-64x64">
            <img src={props.food.image?props.food.image:"https://i.imgur.com/URhdrAm.png"} alt={props.food.name?props.food.name:"Null"}/>
        </figure>
        </div>
        <div className="media-content">
        <div className="content">
            <p>
            <strong>{props.food.name?props.food.name:"Null"}</strong> <br />
            <small>{props.food.calories?props.food.calories:0}</small>
            </p>
        </div>
        </div>
        <div className="media-right">
        <div className="field has-addons">
            <div className="control">
            <input className="input" type="number" onChange={handleQuantityIncrement} value={quant} />
            </div>
            <div className="control">
            <button className="button is-info" onClick={handleTodaysFoodIncrement}>
                +
            </button>
            </div>
        </div>
        </div>
    </article>
    </div>
    );
}