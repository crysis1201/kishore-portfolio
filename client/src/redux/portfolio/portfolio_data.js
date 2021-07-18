const PORTFOLIO_DATA = {
    flutter: {
      id: 1,
      title: 'Flutter Apps',
      routeName: 'flutter',
      imageUrl: 'images/appDev.png',
      levels: [
        {
          percent: '85%', 
          style: { backgroundColor: "#A69DFF", width: '85%', height: '100%', borderRadius: '20px 50px 50px 20px',},
          title: 'Flutter Apps',
        }
      ],
      barValues: [
        {  
          id: 1,
          name: 'Dart',
          percent: '70%',
          color: 'yellow'
        },
        {  
          id: 2,
          name: 'Dart',
          percent: '70%',
          color: 'yellow'
        },
      ],
      items: [
        {
          id: 1,
          name: 'Brown Brim',
          imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
          price: 25
        },
        {
          id: 2,
          name: 'Blue Beanie',
          imageUrl: 'https://i.ibb.co/ypkgK0X/blue-beanie.png',
          price: 18
        },
        {
          id: 3,
          name: 'Brown Cowboy',
          imageUrl: 'https://i.ibb.co/QdJwgmp/brown-cowboy.png',
          price: 35
        },
      ]
    },
    motionDesign: {
      id: 2,
      title: 'Motion Graphics',
      routeName: 'motiongraphics',
      imageUrl: 'images/motion.png',
      levels: [
        {
          percent: '80%', 
          style: { backgroundColor: "#FE5F55", width: '80%', height: '100%', borderRadius: '20px 50px 50px 20px'},
          title: 'Motion Graphics',
        }
      ],
      barValues: [
        {  
          id: 1,
          name: 'Dart',
          percent: '70%',
          color: 'yellow'
        },
        {  
          id: 1,
          name: 'Dart',
          percent: '70%',
          color: 'yellow'
        },
      ],
      items: [
        {
          id: 10,
          name: 'Adidas NMD',
          imageUrl: 'https://i.ibb.co/0s3pdnc/adidas-nmd.png',
          price: 220
        },
        {
          id: 11,
          name: 'Adidas Yeezy',
          imageUrl: 'https://i.ibb.co/dJbG1cT/yeezy.png',
          price: 280
        },
      ]
    },
    video :{
      id: 5,
      title: 'Video Works',
      routeName: 'videoworks',
      levels: [
        {
          percent: '60%', 
          style: { backgroundColor: "#B3D89C", width: '60%', height: '100%', borderRadius: '20px 50px 50px 20px'},
          title: 'Video Works',
        }
      ],
      barValues: [
        {  
          id: 1,
          name: 'Dart',
          percent: '70%',
          color: 'yellow'
        },
        {  
          id: 1,
          name: 'Dart',
          percent: '70%',
          color: 'yellow'
        },
      ],
      items: [
        {
          id: 30,
          name: 'Camo Down Vest',
          imageUrl: 'https://i.ibb.co/xJS0T3Y/camo-vest.png',
          price: 325
        },
        {
          id: 31,
          name: 'Floral T-shirt',
          imageUrl: 'https://i.ibb.co/qMQ75QZ/floral-shirt.png',
          price: 20
        },
        {
          id: 32,
          name: 'Black & White Longsleeve',
          imageUrl: 'https://i.ibb.co/55z32tw/long-sleeve.png',
          price: 25
        },
      ]
    }
  };
  
  export default PORTFOLIO_DATA;
  