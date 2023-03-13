import { Category } from "./category.model";

export class Product {
    Id!: string;
    Nom!: string;
    Description!: string;
    Prix_vente!: number;
    Prix_achat!: number;
    Stock!: number;
    categories!: Category;
}