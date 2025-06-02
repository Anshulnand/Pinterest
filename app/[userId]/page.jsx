"use client";
import React, { useEffect, useState } from 'react';
import app from '../Shared/firebaseConfig';
import UserInfo from '../../components/UserInfo';
import PinList from '../../components/Pins/PinList';
import { collection, getDocs, getDoc, doc, getFirestore, query, where } from 'firebase/firestore';

export default function Profile({ params }) {
  // Unwrap params synchronously here with React.use()
  const unwrappedParams = React.use(params);
  // Now safely access userId param
  const userId = unwrappedParams?.userId;
  // Decode email from URL param (replace %40 with @)
  const email = userId?.replace('%40', '@');

  const db = getFirestore(app);
  const [userInfo, setUserInfo] = useState(null);
  const [listOfPins, setListOfPins] = useState([]);

  useEffect(() => {
    if (!email) return;

    const getUserInfo = async () => {
      const docRef = doc(db, "user", email);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setUserInfo(docSnap.data());
      } else {
        console.log("No such document!");
      }
    };

    getUserInfo();
  }, [email, db]);

  useEffect(() => {
    if (!userInfo) return;

    const getUserPins = async () => {
      const q = query(collection(db, 'pinterest-post'), where("email", '==', userInfo.email));
      const querySnapshot = await getDocs(q);
      const pinList = [];
      querySnapshot.forEach((doc) => {
        pinList.push(doc.data());
      });
      setListOfPins(pinList);
    };

    getUserPins();
  }, [userInfo, db]);

  return (
    <div>
      {userInfo ? (
        <>
          <UserInfo userInfo={userInfo} />
          <PinList listOfPins={listOfPins} />
        </>
      ) : (
        <p>Loading user info...</p>
      )}
    </div>
  );
}
