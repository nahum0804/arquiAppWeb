import { getFirestore, doc, getDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";


async function readDB(){
    /*
    USE RELATIVE PATHS CLASSES! THIS WONT NEVER RUN IN ANOTHER COMPUTER
    */
    const firebaseConf = "C:\Users\Usuario\Desktop\ProyectoDeIoT\artificialTemperatureGenerator\temperaturemonitoring-firebase.json"
    const app = initializeApp(firebaseConf);
    const db = getFirestore(app);

    const docRef = doc(db, "dataTemp");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
};

export { readDB };
