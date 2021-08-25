let options = {
    foodSlogan: "Primeiro, seu prato",
    food: [{
        name: "Burgão gostoso",
        description: "Gostoso d+, confia na call",
        img: "./images/burgao gostoso.jpeg",
        price: "R$ 12,00"
    },
    {
        name: "Burgão gostoso",
        description: "Gostoso d+, confia na call",
        img: "./images/burgao gostoso.jpeg",
        price: "R$ 12,00"
    },{
        name: "Burgão gostoso",
        description: "Gostoso d+, confia na call",
        img: "./images/burgao gostoso.jpeg",
        price: "R$ 12,00"
    },{
        name: "Burgão gostoso",
        description: "Gostoso d+, confia na call",
        img: "./images/burgao gostoso.jpeg",
        price: "R$ 12,00"
    },{
        name: "Burgão gostoso",
        description: "Gostoso d+, confia na call",
        img: "./images/burgao gostoso.jpeg",
        price: "R$ 12,00"
    },{
        name: "Burgão gostoso",
        description: "Gostoso d+, confia na call",
        img: "./images/burgao gostoso.jpeg",
        price: "R$ 12,00"
    },]
}

export default function OptionsContainer () {
    return(
        <div className = "bloco-opcoes">
            <p class="comando-bloco">{options.foodSlogan}</p>
            {options.food.map(element =>(
                <button class="opcao" id= "prato1" onclick="selecionaPrato('prato1', 'certinhoP1')" >
                    <img src={element.img}/>
                    <p class={element.name}>Burgão gostoso</p>
                    <p class={element.description}>Gostoso d+, confia na call</p>
                    <p class={element.price}>R$ 12,00</p>
                    <ion-icon name="checkmark-circle" class="certinho" id="certinhoP1"></ion-icon>
                </button>))}
        </div>
    )
}