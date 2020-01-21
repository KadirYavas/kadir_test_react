import React, {useState} from 'react';


const Vehicule = (props) => {

    const [border, setBorder] = useState('Non validé')
    const [classe, setClasse] = useState('border')

    const change = () =>{
        setBorder("Validé")
        setClasse('')
    }


    return (
        <div>
            {props.validite === "Non validé" ?
            <div><p className={classe}>{props.nom}, {props.year}, {props.color}, {props.type}, {border}</p>
            <button onClick={change} className="btn">Valider votre voiture</button></div>
            :
            <p>{props.nom}, {props.year}, {props.color}, {props.type}, {props.validite}</p>
            }
        </div>
    )
}









export default Vehicule;