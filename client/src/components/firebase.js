import firebase from "firebase";
import 'firebase/firestore'

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC2-KVscShmQWfzYuHmkkQ5W_ruZewVbIY",
    authDomain: "kishore-portfolio.firebaseapp.com",
    databaseURL: "https://kishore-portfolio-default-rtdb.firebaseio.com",
    projectId: "kishore-portfolio",
    storageBucket: "kishore-portfolio.appspot.com",
    messagingSenderId: "883114526405",
    appId: "1:883114526405:web:6fb59177979884b1bf52ac",
    measurementId: "G-8BC1GGSLWZ"
});

export const convertCollectionsSnapshotToMap = portfolioData => {
    const transformedCollection = portfolioData.docs.map(doc => {
      const { title, items, levels, barValues, imageUrl } = doc.data();
  
      return {
        routeName: encodeURI(title.toLowerCase()),
        id: doc.id,
        imageUrl,
        title,
        levels,
        barValues,
        items
      };
    });

    return transformedCollection.reduce((accumulator, portfolioData) => {
      accumulator[portfolioData.title.toLowerCase()] = portfolioData;
      return accumulator;
    }, {});
  };

export const db = firebaseApp.firestore();
