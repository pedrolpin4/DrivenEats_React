import Option from "./Option"

export default function OptionsContainer () {
    return(
        <div className = "bloco-opcoes">
            <Option category = "food" />
            <Option category = "drinks" />
            <Option category = "dessert" />
        </div>
    )
}