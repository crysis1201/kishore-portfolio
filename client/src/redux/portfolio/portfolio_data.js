const PORTFOLIO_DATA = {
    motiondesign: {
      id: 1,
      title: 'Motion Design',
      routeName: 'motiondesign',
      imageUrl: '/assests/videos/motion.mp4',
      levels: [
        {
          percent: '85%', 
          style: { backgroundColor: "#A69DFF", width: '85%', height: '100%', borderRadius: '20px 50px 50px 20px',},
          title: 'Motion Design',
        }
      ],
      barValues: [
        {  
          id: 1,
          title: 'Adobe After Effects ',
          percent: '80%',
          style: { backgroundColor: "#A69DFF", width: '80%', height: '100%', borderRadius: '20px 50px 50px 20px',},
        },
        {  
          id: 2,
          title: 'Adobe Premiere Pro',
          percent: '80%',
          style: {backgroundColor: "#FE5F55", width: '80%', height: '100%', borderRadius: '20px 50px 50px 20px'},
        },
        {  
          id: 3,
          title: 'Cinema 4D with Ocatane & Red Shift',
          percent: '85%',
          style: { backgroundColor: "#B3D89C", width: '60%', height: '100%', borderRadius: '20px 50px 50px 20px'},
        },
        {  
          id: 4,
          title: 'Unity',
          percent: '70%',
          style: { backgroundColor: "#FFE156", width: '70%', height: '100%', borderRadius: '20px 50px 50px 20px'},
        },
        {  
          id: 4,
          title: 'Adobe Illustrator',
          percent: '75%',
          style: { backgroundColor: "#E63462", width: '70%', height: '100%', borderRadius: '20px 50px 50px 20px'},
        },
        {  
          id: 5,
          title: 'Adobe Photoshop',
          percent: '70%',
          style: { backgroundColor: "#B9F18C", width: '80%', height: '100%', borderRadius: '20px 50px 50px 20px'},
        },
      ],
      items: [
        {
          id: 1,
          name: '3D Handhold Phone',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          imageUrl: '/assests/videos/motiondesign/3dPhone.mp4',
        },
        {
          id: 2,
          name: 'Zinc 2nd Floor',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          imageUrl: '/assests/videos/motiondesign/2ndFloor.mp4',
        },
        {
          id: 3,
          name: 'Zinc 5th Floor',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          imageUrl: '/assests/videos/motiondesign/5thFloor.mp4', 
        },{
          id: 4,
          name: 'Zinc 7th Floor',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          imageUrl: '/assests/videos/motiondesign/7thFloor.mp4',
        },
        {
          id: 5,
          name: 'Zinc 6th Floor',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          imageUrl: '/assests/videos/motiondesign/6thFloor.mp4',
        },
        {
          id: 6,
          name: 'Clear Picture Web',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          imageUrl: '/assests/videos/motiondesign/delivery.mp4', 
        },
        {
          id: 7,
          name: '3D Handhold Phone',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          imageUrl: '/assests/videos/motiondesign/Loop_1.mp4',
        },
        {
          id: 8,
          name: 'Zinc 2nd Floor',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          imageUrl: '/assests/videos/motiondesign/socialmedia.mp4',
        },
        {
          id: 9,
          name: '5th Floor',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          imageUrl: '/assests/videos/motiondesign/hummingbird.mp4', 
        },
      ]
    },
    flutterapps: {
      id: 2,
      title: 'Flutter Apps',
      routeName: 'flutterapps',
      imageUrl: '/assests/appDev.png',
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
          title: 'Dart',
          percent: '80%',
          style: { backgroundColor: "#A69DFF", width: '80%', height: '100%', borderRadius: '20px 50px 50px 20px',},
        },
        {  
          id: 2,
          title: 'Flutter',
          percent: '75%',
          style: {backgroundColor: "#FE5F55", width: '80%', height: '100%', borderRadius: '20px 50px 50px 20px'},
        },
        {  
          id: 3,
          title: 'Adobe XD',
          percent: '70',
          style: { backgroundColor: "#B3D89C", width: '60%', height: '100%', borderRadius: '20px 50px 50px 20px'},
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
  