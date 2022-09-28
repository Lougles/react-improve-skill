import {useState} from "react";

export const useFetch = (getdata) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  
  const fetching = async() => {
    try{
      setIsLoading(true)
      await getdata()
    }catch (e) {
      setError(e.message);
    }finally {
      setIsLoading(false);
    }
    return [fetching, isLoading, error]
  }
}