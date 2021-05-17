// Descrizione: Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
const app = new Vue(
    {
        el: "#root",
        data: {
            titolo: "Benvenuto Vue JS!",
            //Bonus: Aggiungere alla pagina un’immagine, presa anch’essa da un data.
            helloLink: "https://cdn-images-1.medium.com/max/1200/1*G1PUKcevhmpXSKUeX9XnLA.png"
        }
    }
);
