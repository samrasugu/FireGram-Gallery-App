import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useState, useEffect } from "react";
import { storage, db} from '../firebase/config';

const UseStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(() => {

        const uploadFile = () => {
            
        
        //refs
        // const collectionRef = db.collection('images');

        const storeRef = ref(storage);
        const storageRef = ref(storeRef, file.name);

        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on('state_changed', (snapshot)=>{
            let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setProgress(percentage);
        }, (err)=> {
            setError(err);
        }, () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                setUrl(downloadURL);
                console.log(downloadURL);

                addDoc(collection(db, "images"), {
                    url: downloadURL,
                    createdAt: serverTimestamp()
                })
            });
            // const url = await uploadTask.getDownloadURL();
            // setUrl(url);
            // console.log(url);
        });
    };
    file && uploadFile();
    },[file]);

    return {progress, url, error}
}

export default UseStorage;