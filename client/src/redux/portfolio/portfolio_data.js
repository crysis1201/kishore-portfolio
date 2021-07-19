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
      imageUrl: 'images/motion.mp4',
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
  };
  
  export default PORTFOLIO_DATA;
  