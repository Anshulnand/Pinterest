"use client"

import Image from 'next/image'
import { useSession, signIn, signOut } from "next-auth/react"
import { collection, getDocs, getFirestore, query } from 'firebase/firestore';
import app from './Shared/firebaseConfig';
import { useEffect, useState } from 'react';
import PinList from './../components/Pins/PinList'

export default function Home() {
  const db = getFirestore(app);
  const [listOfPins, setListOfPins] = useState<any[]>([]);
  const { data: session } = useSession();

  useEffect(() => {
    getAllPins();
  }, []);

  const getAllPins = async () => {
    const q = query(collection(db, 'pinterest-post'));
    const querySnapshot = await getDocs(q);

    const pins: any[] = [];  // <-- Fix: explicitly type array

    querySnapshot.forEach((doc) => {
      pins.push(doc.data());
    });

    setListOfPins(pins);
  }

  return (
    <>
      <div className='p-3'>
        <div className="logo-container mb-4">
          <Image src="/logo.png" alt="Logo" width={100} height={50} />
        </div>
        <div className="auth-buttons mb-4">
          {session ? (
            <>
              <p>Signed in as {session.user?.email}</p>
              <button onClick={() => signOut()}>Sign out</button>
            </>
          ) : (
            <button onClick={() => signIn()}>Sign in</button>
          )}
        </div>
        <PinList listOfPins={listOfPins} />
      </div>
    </>
  )
}
