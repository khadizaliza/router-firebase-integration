import { useEffect, useState } from "react"

const useFirebase = () =>{
    const [user, setuser] = useState({});
  
    useEffect( () =>{

    }, []);
    const singInWithGoogle = () =>{
        console.log('singing')
    }
     return [user, setuser];
}

export default useFirebase;












