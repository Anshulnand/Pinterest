"use client";
import React, { useEffect, useState } from 'react';
import app from '../Shared/firebaseConfig';
import UserInfo from '../../components/UserInfo';
import { collection, getDocs, getDoc, doc, getFirestore, query, where } from 'firebase/firestore';
import PinList from '../../components/Pins/PinList';

function Profile({ params }) {
  const db = getFirestore(app);
  const [userInfo, setUserInfo] = useState();
  const [listOfPins, setListOfPins] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // Unwrap `params` with `React.use()` to ensure compatibility with future Next.js versions
      const userId = await params; // Unwrap the params Promise
      const email = userId?.userId?.replace('%40', '@');
      if (email) {
        getUserInfo(email);
      }
    };

    fetchData();
  }, [params]);

  const getUserInfo = async (email) => {
    const docRef = doc(db, "user", email);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setUserInfo(docSnap.data());
    } else {
      console.log("No such document!");
    }
  };

  useEffect(() => {
    if (userInfo) {
      getUserPins();
    }
  }, [userInfo]);

  const getUserPins = async () => {
    const pinList = []; // Local array to store pin data before updating state
    const q = query(collection(db, 'pinterest-post'), where("email", '==', userInfo.email));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      pinList.push(doc.data()); // Push to the local array
    });

    setListOfPins(pinList); // Update state with the complete list of pins
  };

  return (
    <div>
      {userInfo ? (
        <div>
          <UserInfo userInfo={userInfo} />
          <PinList listOfPins={listOfPins} />
        </div>
      ) : null}
    </div>
  );
}

export default Profile;
