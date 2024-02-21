export interface Product {
    id: number;
    name: string;
    color: string;
    Os: string;
    hasNfc: boolean;
    ram: number;
    rom: number;
    camera: string;
    price: number;
    imageUrl: string;
  }
  
  export const products = [
    {
      id: 1,
      name: 'Iphone 15 Pro',
      color: 'gray',
      Os: 'iOS 17',
      hasNfc: true,
      ram: 8,
      rom: 256,
      camera: 'Camera: 48MP + 12MP +12MP',
      price: 614440,
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-seryi-113138420/?c=471010000',
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/hc1/h65/83559848181790.png?format=gallery-medium'
    },
    {
      id: 2,
      name: 'Iphone 14 Pro',
      color: 'purple',
      Os: 'Ios 16',
      hasNfc: true,
      ram: 8,
      rom: 256,
      camera: 'Camera: 48MP + 12MP + 12MP',
      price: 624138,
      link: 'https://kaspi.kz/shop/p/apple-iphone-14-pro-max-256gb-fioletovyi-106363342/?c=471010000',
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h19/h85/64508108931102.jpg?format=gallery-medium'
    },
    {
      id: 3,
      name: 'IPhone 13',
      color: 'black',
      Os: 'iOS 15',
      hasNfc: true,
      ram: 8,
      rom: 256,
      camera: 'Camera: 24MP + 12MP + 12MP',
      price: 371089,
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-256gb-chernyi-102298409/?c=471010000',
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h77/hb4/63998014586910.jpg?format=gallery-medium'
    },
    {
      id: 4,
      name: 'Apple Watch Series 9',
      color: 'blue',
      Os: 'Ios 9+',
      hasNfc: true,
      ram: 1,
      rom: 64,
      camera: 'GPS: Yes',
      price: 205323,
      link: 'https://kaspi.kz/shop/p/apple-watch-series-9-gps-m-l-45-mm-sinii-chernyi-113398437/',
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h06/h98/83874224799774.jpg?format=gallery-medium'
    },
    {
      id: 5,
      name: 'Apple Watch Ultra Series 2',
      color: 'starlight',
      Os: 'Ios 11+',
      hasNfc: true,
      ram: 1,
      rom: 32,
      camera: 'GPS: Yes',
      price: 139500,
      link: 'https://kaspi.kz/shop/p/apple-watch-ultra-series-2-gps-cellular-49-mm-starlight-sinii-113573988/',
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h23/h5b/84060360507422.png?format=gallery-medium  '
    },
    {
      id: 6,
      name: 'AirPods 2nd',
      color: 'White',
      Os: 'None',
      hasNfc: false,
      ram: 0,
      rom: 0,
      camera: 'Impedance: 32.0 Ohm',
      price: 54000,
      link: 'https://kaspi.kz/shop/p/apple-airpods-2nd-generation-belyi-114927908/?c=471010000',
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h12/hc8/84594232688670.jpg?format=gallery-medium'
    },
    {
      id: 7,
      name: 'AirPods 3',
      color: 'White',
      Os: 'None',
      hasNfc: true,
      ram: 0,
      rom: 0,
      camera: 'Impedance: 16.0 ohm',
      price: 84899,
      link: 'https://kaspi.kz/shop/p/apple-airpods-3-with-lightning-charging-case-belyi-106667987/?c=471010000',
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h31/hd7/64362668556318.jpg?format=gallery-medium'
    },
    {
      id: 8,
      name: 'AirPods Pro 2nd generation',
      color: 'White',
      Os: 'None',
      hasNfc: true,
      ram: 0,
      rom: 0,
      camera: 'Impedance: 16.0 ohm',
      price: 107999,
      link: 'https://kaspi.kz/shop/p/apple-airpods-pro-2nd-generation-belyi-106362968/?c=471010000',
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/hb7/h5e/64511113199646.jpg?format=gallery-medium'
    },
    {
      id: 9,
      name: 'Apple AirPods Max',
      color: 'Silver',
      Os: 'None',
      hasNfc: true,
      ram: 0,
      rom: 0,
      camera: 'Impedance: 32.0 ohm',
      price: 273325,
      link: 'https://kaspi.kz/shop/p/apple-airpods-max-serebristyi-100949286/?c=471010000',
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h97/h0d/64141045628958.jpg?format=gallery-medium'
    },
    {
      id: 10,
      name: 'Apple Airtag',
      color: 'white',
      Os: 'Ios',
      hasNfc: true,
      ram: 0,
      rom: 0,
      camera: 'GPS: Yes',
      price: 17519,
      link: 'https://kaspi.kz/shop/p/apple-airtag-belyi-101522198/?c=471010000',
      imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airtag-single-select-202104?wid=445&hei=445&fmt=jpeg&qlt=95&.v=1617761671000'
    }
  ];
  
  
  /*
  Copyright Google LLC. All Rights Reserved.
  Use of this source code is governed by an MIT-style license that
  can be found in the LICENSE file at https://angular.io/license
  */