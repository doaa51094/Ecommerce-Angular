export interface Product {
  imageCover: string;
  title: string;
  price: number;
  ratingsAverage: number;
  category:Category
}
interface Category{
  name:string
}
