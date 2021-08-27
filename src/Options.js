
const meals = [{
    name: "Burgão gostoso",
    description: "Gostoso d+, confia na call",
    img: "https://s2.glbimg.com/-on4mnFlw5G3RI4sFYUyPcsE5lE=/620x466/e.glbimg.com/og/ed/f/original/2021/05/26/burger_nou.jpeg",
    price: 12
},
{
    name: "Burgão gostoso",
    description: "Gostoso d+, confia na call",
    img: "https://s2.glbimg.com/-on4mnFlw5G3RI4sFYUyPcsE5lE=/620x466/e.glbimg.com/og/ed/f/original/2021/05/26/burger_nou.jpeg",
    price: 12
},{
    name: "Burgão gostoso",
    description: "Gostoso d+, confia na call",
    img: "https://s2.glbimg.com/-on4mnFlw5G3RI4sFYUyPcsE5lE=/620x466/e.glbimg.com/og/ed/f/original/2021/05/26/burger_nou.jpeg",
    price: 12
},{
    name: "Burgão gostoso",
    description: "Gostoso d+, confia na call",
    img: "https://s2.glbimg.com/-on4mnFlw5G3RI4sFYUyPcsE5lE=/620x466/e.glbimg.com/og/ed/f/original/2021/05/26/burger_nou.jpeg",
    price: 12
},{
    name: "Burgão gostoso",
    description: "Gostoso d+, confia na call",
    img: "https://s2.glbimg.com/-on4mnFlw5G3RI4sFYUyPcsE5lE=/620x466/e.glbimg.com/og/ed/f/original/2021/05/26/burger_nou.jpeg",
    price: 12
},{
    name: "Burgão gostoso",
    description: "Gostoso d+, confia na call",
    img: "https://s2.glbimg.com/-on4mnFlw5G3RI4sFYUyPcsE5lE=/620x466/e.glbimg.com/og/ed/f/original/2021/05/26/burger_nou.jpeg",
    price: 12
},{
    name: "Burgão gostoso",
    description: "Gostoso d+, confia na call",
    img: "https://s2.glbimg.com/-on4mnFlw5G3RI4sFYUyPcsE5lE=/620x466/e.glbimg.com/og/ed/f/original/2021/05/26/burger_nou.jpeg",
    price: 12
}]

const drinks = [{
    name:"Suco Natural",
    img: "https://media.gazetadopovo.com.br/viver-bem/2019/06/suco-fruta-acucar-risco-morte-600x400-f107f9a0.jpg",
    description: "Obs: É de pozinho",
    price: 6
},{
    name:"Suco Natural",
    img: "https://media.gazetadopovo.com.br/viver-bem/2019/06/suco-fruta-acucar-risco-morte-600x400-f107f9a0.jpg",
    description: "Obs: É de pozinho",
    price: 6
},{
    name:"Suco Natural",
    img: "https://media.gazetadopovo.com.br/viver-bem/2019/06/suco-fruta-acucar-risco-morte-600x400-f107f9a0.jpg",
    description: "Obs: É de pozinho",
    price: 6
},{
    name:"Suco Natural",
    img: "https://media.gazetadopovo.com.br/viver-bem/2019/06/suco-fruta-acucar-risco-morte-600x400-f107f9a0.jpg",
    description: "Obs: É de pozinho",
    price: 6
},{
    name:"Suco Natural",
    img: "https://media.gazetadopovo.com.br/viver-bem/2019/06/suco-fruta-acucar-risco-morte-600x400-f107f9a0.jpg",
    description: "Obs: É de pozinho",
    price: 6
},{
    name:"Suco Natural",
    img: "https://media.gazetadopovo.com.br/viver-bem/2019/06/suco-fruta-acucar-risco-morte-600x400-f107f9a0.jpg",
    description: "Obs: É de pozinho",
    price: 6
},{
    name:"Suco Natural",
    img: "https://media.gazetadopovo.com.br/viver-bem/2019/06/suco-fruta-acucar-risco-morte-600x400-f107f9a0.jpg",
    description: "Obs: É de pozinho",
    price: 6
}]


const desserts = [{
    name: "Docinho",
    img: "https://cdn.awsli.com.br/600x700/287/287213/produto/15283821/c7e3a84e66.jpg",
    description: "Vem um só",
    price: 2
},{
    name: "Docinho",
    img: "https://cdn.awsli.com.br/600x700/287/287213/produto/15283821/c7e3a84e66.jpg",
    description: "Vem um só",
    price: 2
},{
    name: "Docinho",
    img: "https://cdn.awsli.com.br/600x700/287/287213/produto/15283821/c7e3a84e66.jpg",
    description: "Vem um só",
    price: 2
},{
    name: "Docinho",
    img: "https://cdn.awsli.com.br/600x700/287/287213/produto/15283821/c7e3a84e66.jpg",
    description: "Vem um só",
    price: 2
},{
    name: "Docinho",
    img: "https://cdn.awsli.com.br/600x700/287/287213/produto/15283821/c7e3a84e66.jpg",
    description: "Vem um só",
    price: 2
},{
    name: "Docinho",
    img: "https://cdn.awsli.com.br/600x700/287/287213/produto/15283821/c7e3a84e66.jpg",
    description: "Vem um só",
    price: 2
},{
    name: "Docinho",
    img: "https://cdn.awsli.com.br/600x700/287/287213/produto/15283821/c7e3a84e66.jpg",
    description: "Vem um só",
    price: 2
}]


const Options = ({category, slogan, key}) => {
    
    if(category === "foods"){
        category = [...meals];
    } else if (category === "drinks") {
        category = [...drinks]
    } else category = [...desserts]

    return(
        <>
            <p className="containers-message">{slogan}</p>
            <div className = "options-container">
                {category.map((element, index) =>(
                        <button className="option" key = {key+index}>
                            <img src={element.img}/>
                            <p className="options-name">{element.name}</p>
                            <p className="description">{element.description}</p>
                            <p className="price">{`R$ ${element.price.toFixed(2).toString().replace(".", ",")}`}</p>
                        </button>
                    ))
                }
            </div>
        </>
    )
}

export default Options