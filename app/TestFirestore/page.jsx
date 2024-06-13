"use client"

// app/TestFirestore.js (ou pages/TestFirestore.js)
import { useState } from "react";
import { db } from "../../config/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

export default function TestFirestore() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleAddUser = async () => {
    try {
      const docRef = await addDoc(collection(db, "users"), {
        name: name,
        age: parseInt(age),
      });
      alert("Document written with ID: " + docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div>
      <h1>Test Firestore</h1>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <button onClick={handleAddUser}>Add User</button>
    </div>
  );
}
