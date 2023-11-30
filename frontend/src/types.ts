export type Ad = {
    id: number;
    title: string;
    rep: number;
    date: string;
    poids: number;
    serie: number;
    category?: Category;
  };
  
  export type Category = {
    id: number;
    name: string;
  };