export interface Product {
  imageCover: string;
  title: string;
  price: number;
  ratingsAverage: number;
  category:Category;
  id:string;
}
interface Category{
  name:string
}
