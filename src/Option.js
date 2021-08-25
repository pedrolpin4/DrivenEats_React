let options = {
    foodsSlogan: "Primeiro, seu prato",
    foodKey: "f",
    foods: [{
        name: "Burgão gostoso",
        description: "Gostoso d+, confia na call",
        img: "./images/burgao gostoso.jpeg",
        price: 12
    },
    {
        name: "Burgão gostoso",
        description: "Gostoso d+, confia na call",
        img: "./images/burgao gostoso.jpeg",
        price: 12
    },{
        name: "Burgão gostoso",
        description: "Gostoso d+, confia na call",
        img: "./images/burgao gostoso.jpeg",
        price: 12
    },{
        name: "Burgão gostoso",
        description: "Gostoso d+, confia na call",
        img: "./images/burgao gostoso.jpeg",
        price: 12
    },{
        name: "Burgão gostoso",
        description: "Gostoso d+, confia na call",
        img: "./images/burgao gostoso.jpeg",
        price: 12
    },{
        name: "Burgão gostoso",
        description: "Gostoso d+, confia na call",
        img: "./images/burgao gostoso.jpeg",
        price: 12
    }],

    drinksSlogan: "",
    drinksKey: "d",
    drinks:[{
        name:"Suco Natural",
        img: "./images/sucos.png",
        description: "Obs: É de pozinho",
        price: 6
    },{
        name:"Suco Natural",
        img: "./images/sucos.png",
        description: "Obs: É de pozinho",
        price: 6
    },{
        name:"Suco Natural",
        img: "./images/sucos.png",
        description: "Obs: É de pozinho",
        price: 6
    },{
        name:"Suco Natural",
        img: "./images/sucos.png",
        description: "Obs: É de pozinho",
        price: 6
    },{
        name:"Suco Natural",
        img: "./images/sucos.png",
        description: "Obs: É de pozinho",
        price: 6
    },{
        name:"Suco Natural",
        img: "./images/sucos.png",
        description: "Obs: É de pozinho",
        price: 6
    },{
        name:"Suco Natural",
        img: "./images/sucos.png",
        description: "Obs: É de pozinho",
        price: 6
    },],

    dessertsSlogan: "",
    dessertsKey: "ds",
    desserts: []
}

export default function Option (props){
    let type;
    let slogan;
    let key;
    if(props.category === "food"){
        type = options.foods;
        slogan = options.foodsSlogan;
        key = options.foodKey;
    } else if (props.category === "drinks") {
        type = options.drinks;
        slogan = options.drinksSlogan;
        key = options.drinksKey;
    } else{
        type = options.desserts;
        slogan = options.dessertsSlogan;
        key = options.dessertsKey;
    }
    return(
        <>
            <p className="comando-bloco">{slogan}</p>
            <div className = "container-opcoes">
                {type.map((element, index) =>(
                        <button className="opcao" key = {key+index}>
                            <img src={element.img}/>
                            <p className="nome-opcao">{element.name}</p>
                            <p className="descricao">{element.description}</p>
                            <p className="preco">{`R$ ${element.price.toFixed(2).toString().replace(".", ",")}`}</p>
                            <ion-icon name="checkmark-circle" className="certinho" id="certinhoP1"></ion-icon>
                        </button>

                    ))
                }
            </div>
        </>
    )
}
