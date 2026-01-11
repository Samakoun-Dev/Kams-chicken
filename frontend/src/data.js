// 🐔 Chicken
import bucket from "./assets/chicken/bucket.jpeg";
import tenders from "./assets/chicken/tenders.jpeg";
import quartpoulet from "./assets/chicken/quartpoulet.jpeg";
import demi from "./assets/chicken/pouletdemi.jpeg";
import royal from "./assets/chicken/dyroyal.jpg";
import cordb from "./assets/Tacos/Tcordb.jpeg";
import merguez from "./assets/Tacos/Tmerguez.jpeg";
import double from "./assets/Tacos/Tdouble.jpeg";
import pazz from "./assets/Tacos/Tpazzoga.jpeg";
import poulet from "./assets/Tacos/Tpoulet.jpeg";
import Troyal from "./assets/Tacos/Troyal.jpeg";
import viande from "./assets/Tacos/Tviande.jpeg";
import broch from "./assets/Viande/brochette.jpeg";
import foie from "./assets/Viande/foie.jpeg";
import sauc from "./assets/Viande/sauc.jpeg";
import pfm from "./assets/Pizza/pFM.jpeg";
import ppr from "./assets/Pizza/Ppepe.jpeg";
import pital from "./assets/Pizza/Pital.jpg";
import pmar from "./assets/Pizza/Pmarinara.jpg";
import pizt from "./assets/Pizza/Pizatu.jpg";
import dinde from "./assets/Viande/dinde.jpg";
import coteveau from "./assets/Viande/coteveau.jpg";
import fiboe from "./assets/Viande/fiboe.jpg";
import mechagn from "./assets/Viande/mechouiagn.jpg";
import Ppoulet from "./assets/Sandwich/Ppoulet.jpg";
import Pv from "./assets/Sandwich/Pvege.jpg";
import Pdin from "./assets/Sandwich/Pdinde.jpg";
import Pvian from "./assets/Sandwich/Pviande.jpg";
import burg from "./assets/Burger/burgerviande.jpg";
import hot from "./assets/Burger/hotdog.jpg";

const productsData = {
    chicken: [
        { id: 1, name: "Bucket Poulet", price: 10.50, image: bucket },
        { id: 2, name: "Tenders", price: 4.90, image: tenders },
        { id: 3, name: "1/4 Poulet", price: 6.50, image: quartpoulet },
        { id: 4, name: "1/2 Poulet", price: 8.50, image: demi },
        { id: 5, name: "Royal Poulet", price: 12.00, image: royal }
    ],
    Tacos: [
        { id: 1, name: "Tacos Poulet", price: 10.50, image: poulet },
        { id: 2, name: "Tacos Pazzoga", price: 10.50, image: pazz },
        { id: 3, name: "Tacos Viande", price: 10.50, image: viande },
        { id: 4, name: "Tacos Royal", price: 10.50, image: Troyal },
        { id: 5, name: "Tacos Merguez", price: 10.50, image: merguez },
        { id: 6, name: "Tacos Cordon Bleu", price: 10.50, image: cordb },
        { id: 7, name: "Tacos Double", price: 10.50, image: double }
    ],
    Grillade: [
        { id: 1, name: "Foie", price: 20.50, image: foie },
        { id: 2, name: "Brochette", price: 19.50, image: broch },
        { id: 3, name: "Saucisse", price: 13.50, image: sauc },
        { id: 4, name: "Filet de Boeuf", price: 11.50, image: fiboe },
        { id: 5, name: "Mechoui Agneau", price: 33.50, image: mechagn },
        { id: 6, name: "Côte de veau", price: 23.50, image: coteveau },
        { id: 7, name: "Brochette dinde", price: 19.50, image: dinde },
    ],
    Pizza: [
        { id: 1, name: "Pizza Fruit de Mer", price: 8.50, image: pfm },
        { id: 2, name: "Pizza Peperoni", price: 12.50, image: ppr },
        { id: 3, name: "Pizza italien", price: 12.50, image: pital },
        { id: 4, name: "Pizza Turk", price: 12.50, image: pizt },
        { id: 5, name: "Pizza marinara", price: 12.50, image: pmar },
    ],
    Sandwich: [
            { id: 1, name: "Panini poulet", price: 10, image: Ppoulet },
            { id: 2, name: "Panini dinde", price: 10, image: Pdin },
            { id: 3, name: "Panini viande hachée", price: 12, image: Pvian },
            { id: 4, name: "Panini végétarien", price: 14, image: Pv },
        ],
    Burger: [
        { id: 1, name: "Burger", price: 10, image: burg },
        { id: 2, name: "Hotdog", price: 10.5, image: hot },
    ]
};

export default productsData;
