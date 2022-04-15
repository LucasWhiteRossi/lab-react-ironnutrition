import {useState} from 'react'

export function FoodRegister(props){
    
    const [food,setFood] = useState('');
    
    function handleFood(e){
        setFood({...food,[e.target.name]:e.target.value})
        console.log(food)
    };

    function closeRegister(){
        props.setIsActive(false)
    }

    function incrementFoodList(food){
        props.setFoodList([...props.foodList,food])
        props.setFilteredFoodList(props.foodList)
        console.log(props.foodList)
        closeRegister()
    }

    return (
    <div className="modal is-active" id="modal-register-food">
        <div className="modal-background"></div>
        <div className="modal-card">
            <header className="modal-card-head">
            <p className="modal-card-title">Cadastrar Novo Alimento</p>
            <button className="delete" aria-label="close" onClick={()=>closeRegister()}></button>
            </header>
            <section class="modal-card-body">
                
                <label for="name" className="label">Nome</label>
                <input name="name" placeholder="Nome" className="input is-primary" onChange={handleFood}></input>
                
                <br></br>
                
                <label for="calories" className="label">Calorias</label>
                <input name="calories" placeholder="100 kcal" className="input is-primary" type="number" onChange={handleFood}></input>
                <br></br>
                <label for="quantity" className="label">Quantidade</label>
                <input quantity="quantity" placeholder="1" className="input is-primary" type="number" onChange={handleFood}></input>
                <br></br>
                <label for="image" className="label">Imagem</label>
                <input image="image" placeholder="url.png" className="input is-primary" onChange={handleFood}></input>
                
            </section>
            <footer className="modal-card-foot">
            <button className="button is-success" onClick={()=>incrementFoodList(food)}>Salvar</button>
            <button className="button" onClick={()=>closeRegister()}>Cancelar</button>
            </footer>
        </div>
    </div>

    );
}