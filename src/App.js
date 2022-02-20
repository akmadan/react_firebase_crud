// import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from "react";
import {db} from "./firebase_config";
import {collection, getDocs, addDoc, updateDoc, doc, deleteDoc} from "firebase/firestore";

function App() {
    const [newName, setName] = useState("");
    const [newAge, setAge] = useState(0);
    const [users, setUsers] = useState([]);
    const usersCollectionRef = collection(db, "users");


    //retrieve all (similar to initState)
    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(usersCollectionRef);
            setUsers(data.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id
            })));
        };

        getUsers();
    }, []);



    //create a new user 
    const addNewUser = async () => {
      await addDoc(usersCollectionRef, {name: newName, age: Number(newAge)}); 
    };



    //update the user
    const updateUser = async (id, age) => {
      const userDoc = doc(db, "users", id);
      const newFields = { age: age + 1 };
      await updateDoc(userDoc, newFields);
    };
  


  //delete user
  const deleteUser = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
  };




    return (
      <div className="App">
      <input
        placeholder="Name..."
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <input
        type="number"
        placeholder="Age..."
        onChange={(event) => {
          setAge(event.target.value);
        }}
      />

      <button onClick={addNewUser}> Create User</button>
     


            {/* Users List */}
            {
            users.map((user) => {
                return <div>
                    <h1>
                        Name: {
                        user.name
                    } </h1>
                    <h1>
                        Age: {
                        user.age
                    } </h1>
                     <button onClick={()=>{updateUser(user.id, user.age)}}> Update User</button>
                     <button onClick={()=>{deleteUser(user.id)}}> Delete User</button>


                </div>
        })
        } </div>
    );
}

export default App;
