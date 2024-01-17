// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  getDoc,
  collection,
  getDocs,
} from "firebase/firestore";

const initFirebase = async () => {
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAuqvU7nBidHS1nuD9sPdRQsRbFYL32MfA",
    authDomain: "choulab-e11d9.firebaseapp.com",
    projectId: "choulab-e11d9",
    storageBucket: "choulab-e11d9.appspot.com",
    messagingSenderId: "275227300715",
    appId: "1:275227300715:web:31d6c0483caaaad74bf22e",
    measurementId: "G-MN27NCV5NX",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // Initialize Cloud Firestore and get a reference to the service
  const db = await getFirestore(app);

  return db;
}; // initFirebase

/**
   * call data in pages:
   * 
    const [aboutData, setAboutData] = useState();
    useEffect(() => {
      const getPageData = async () => {
        const rtAboutData = await getSingleDoc();

        console.log('App useEffect', { rtAboutData });
        setAboutData(rtAboutData.aboutText);
      }

      getPageData();

    }, []);
*/

/**
 * 
 * @param {string} collectionName 
 * @param {string} docName 
 * @returns {object}
 */
export const getSingleDoc = async (collectionName, docName) => {
  const db = await initFirebase();
  const docRef = doc(db, collectionName, docName);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    // console.log("getSingleDoc Document data:", {
    //   docSnap,
    //   data: docSnap.data(),
    // });

    return docSnap.data();
  } else {
    // docSnap.data() will be undefined in this case
    // console.log("No such document!");
    return; // TODO: error log
  }
}; // getSingleDoc

/**
 * getAllDocs
 * @param {string} collectionName 
 * @returns {array}
 */
export const getAllDocs = async (collectionName) => {
  const docsArray = []
  const db = await initFirebase();

  // get all docs in a collection
  const querySnapshot = await getDocs(collection(db, collectionName));
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    // console.log(doc.id, " => ", doc.data());
    const docInfo = { [doc.id]: doc.data() };
    docsArray.push(docInfo);
  });

  return docsArray;
} // getAllDocs
