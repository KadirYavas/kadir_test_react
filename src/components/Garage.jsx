import React from 'react';
import Vehicule from './Vehicule'


const Garage = () => {
    return (
        <div>
            <Vehicule nom="Mercedes Benz S 260" year="1991" color="Bleu" type="Essence" validite="Non validé"/>
            <Vehicule nom="Fiat 500" year="2010" color="Noir" type="Essence" validite="Non validé"/>
            <Vehicule nom="Volkswagen Crafter" year="2016" color="Blanche" type="Diesel" validite="Validé"/>
            <Vehicule nom="BMW 114" year="2012" color="Bleu" type="Essence" validite="Non validé"/>
            <Vehicule nom="Audi A3" year="2015" color="Rouge" type="Diesel" validite="Validé"/>
        </div>
    )
}








export default Garage;