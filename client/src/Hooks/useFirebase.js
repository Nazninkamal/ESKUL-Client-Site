import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { useEffect, useState } from "react";
import initializeAuthentication from '../Components/Login/Firebase/firebase.init';
// import initializeAuthentication from '../Login/Firebase/firebase.init';


initializeAuthentication();

const useFirebase = () => {
  /* const [admin, setAdmin] = useState(false) */
  const [user, setUser] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const auth = getAuth()

  const [authError, setAuthError] = useState('')



  // login google------------------------
  const signInWithGoogle = (location, navigate) => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        navigate(location?.state?.from || '/')
        const user = result.user;
        // save user to database--
        /* saveUsers(user.email, user.displayName, 'PUT') */

        setUser(user)

        setAuthError('')
      }).catch((error) => {
        setAuthError(error.message)

      })
  }

  // register user 
  const registerUser = (email, password, name, userPhoto, location, navigate) => {
    console.log(userPhoto)
    setIsLoading(true)
    createUserWithEmailAndPassword(auth, email, password)

      .then((userCredential) => {
        // Signed in 

        setAuthError('');
        const newUser = { email, displayName: name, photoURL: userPhoto };
        setUser(newUser)

        // save to database-------------
        /* saveUsers(email, name, 'POST') */
        // updateProfile----------
        updateProfile(auth.currentUser, {
          displayName: name, photoURL: userPhoto
        }).then(() => {
          // Profile updated!
          // ...
        }).catch((error) => {
          // An error occurred
          // ...
        });

        navigate(location?.state?.from || '/')
        setAuthError('')
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        setAuthError(error.message)
        // ..
      }).finally(() => {
        setIsLoading(false);


      })
  }


  const loginUser = (email, password, location, navigate) => {
    setIsLoading(true)
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigate(location?.state?.from || '/')
        setAuthError('')

      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        setAuthError(errorMessage)
      }).finally(() => {
        setIsLoading(false)

      })
  }


  //logout-----------------

  const logOut = () => {
    signOut(auth).then(() => {
      setUser({})
    }).catch((error) => {
      // An error happened.
    });
  }


  // save user to database-------------
  /* const saveUsers = (email, displayName, method) => {
    const user = { email, displayName }

    fetch('https://evening-woodland-47343.herokuapp.com/users', {
      method: method,
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    }).then(res => res.json())
      .then(data => console.log(data))
  }
 */


  // on auth state change -----------------------------

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {

      if (user) {

        setUser(user)
      } else {
        setUser({})
      }
      setIsLoading(false)
    })
    return () => unsubscribe()
  }, [auth])


  // get admin ============================
  /*  useEffect(() => {
 
     fetch(`https://evening-woodland-47343.herokuapp.com/users/${user.email}`)
 
       .then(res => res.json())
       .then(data => {
 
         setAdmin(data.admin)
 
       }).finally(() => {
 
       })
   }, [user.email]) */



  return {
    user, setUser,
    signInWithGoogle,
    registerUser,
    loginUser,
    isLoading,
    setIsLoading,
    logOut,
    authError,
    /* admin */

  }
}

export default useFirebase;






