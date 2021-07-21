import { firebase, db } from "./firebase";


export const test = () => { 
    db.collection("characters").doc("mario").set({
        employment: "plumber",
        outfitColor: "red",
        specialAttack: "fireball"
    })
}