import { onSnapshot, orderBy, collection, query } from "firebase/firestore";
import { useState, useEffect } from "react";
import {db} from '../firebase/config';

const UseFireStore = (coll) => {
    const [docs, setDocs] = useState(null);

    useEffect(()=> {
        const docRef = query(collection(db, coll), orderBy('createdAt', 'desc'));
        const unsub = onSnapshot(docRef, (snapShot) => {
            // console.log("Current data: ", doc.data());
            let list = [];

            snapShot.docs.forEach(doc=>{
                list.push({id:doc.id, ...doc.data()});
            });
            setDocs(list);
        },
        (error) => {
            console.log(error);
        }
        );
        return () => {unsub();};

        // const unsub = db.collection(collection)
        // .orderBy('createdAt', 'desc')
        // .onSnapShot((snap)=> {
        //     let documents = [];
        //     snap.forEach(doc => {
        //         documents.push({...doc.data(), id: doc.id});
        //     });
        //     setDocs(documents);
        // });
        // return () => unsub();
    },[coll]);
  return {docs};
}

export default UseFireStore