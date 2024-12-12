export interface MenuItem {
  name: string;
  price: number;
  description?: string;
  image: string;
}

export interface MenuSection {
  title: string;
  items: MenuItem[];
}

export interface MenuCategory {
  title: string;
  sections: MenuSection[];
}

export interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
  date: string;
}