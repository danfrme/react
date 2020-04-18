import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp =   firebase.initializeApp({
    apiKey: "AIzaSyAiWr43fcVrCg9VW5dYEXlphLqi9we0mBE",
    authDomain: "catch-of-the-day-douglas.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-douglas.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;