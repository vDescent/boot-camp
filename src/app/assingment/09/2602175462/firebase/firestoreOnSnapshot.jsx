import { collection, Firestore, onSnapshot } from "firebase/firestore"
import { db } from "./Initialize"

export function firestoreOnSnapshot(callback) {
    const unsubscribe = onSnapshot(
        collection(db, "posts"),
        (snapshot) =>{
            const posts = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));

            callback(posts);
        }
    );

    return unsubscribe;
}
