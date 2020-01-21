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
            <p onClick={change} className={classe}>{props.nom}, {props.year}, {props.color}, {props.type}, {border}</p>
            :
            <p>{props.nom}, {props.year}, {props.color}, {props.type}, {props.validite}</p>
            }
        </div>
    )
}









export default Vehicule;