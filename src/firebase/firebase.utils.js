import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyA8_GtJ8kfPyNTnyeUnBb8fHT7xBJfI6xM",
  authDomain: "novelex-consulting.firebaseapp.com",
  projectId: "novelex-consulting",
  storageBucket: "novelex-consulting.appspot.com",
  messagingSenderId: "445236036684",
  appId: "1:445236036684:web:7718e00beec8542daba0e9",
  measurementId: "G-2WBK4VHX7M",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`/users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    let createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      alert("Error creating user", error.message);
    }
  }

  return userRef;
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const convertSectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { routeName, title, hero, cards, largeCards, colors, key } =
      doc.data();

    return {
      routeName,
      id: doc.id,
      hero,
      cards,
      largeCards,
      colors,
      title,
      key,
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.key] = collection;
    return accumulator;
  }, {});
};

export const convertCardsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { cardId, descr, page, name, title } = doc.data();

    return {
      cardId,
      descr,
      name,
      title,
      page,
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.name] = collection;
    return accumulator;
  }, {});
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
