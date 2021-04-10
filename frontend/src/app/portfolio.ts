export class Portfolio {
    id: number;
    nom: string;
    description: string;
    categorie_id: number;
    user_id: number;

    constructor(id:number,nom: string,description:string,categorie_id: number, user_id: number) {
        this.id = id;
        this.nom = nom;
        this.description = description;
        this.categorie_id = categorie_id;
        this.user_id = user_id;
    }
}