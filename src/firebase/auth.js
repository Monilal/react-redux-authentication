import { auth } from './firebase';


//Sign UP
export const doCreateUserWithEmailAndPassword = (email, password) =>
    auth.createUserWithEmailAndPassword(email, password);

//Sign In
export const doSignInWithEmailAndPassword = (email, password) =>
    auth.signInWithEmailAndPassword(email, password);

//Sign Out
export const doSignOut = () =>
    auth.signOut();

//Password Reset
export const doPasswordReset = (email) =>
    auth.sendPasswordResetEmail(email);

//Password change
export const doPasswordUpdate = (password) =>
    auth.currentUser.updatePassword(password);