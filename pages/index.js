import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Card  from  './components/Card'
import Loading from './components/Loading'


export default function index() {
  const [products, setProducts] = useState([])
   const [loading, setLoading] = useState(true);
   const [message,setMessage] = useState()
   useEffect(() => {
    const fetchData = async () => {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout
        
        const response = await fetch("/api", { signal: controller.signal });
        clearTimeout(timeoutId);
        
        if (!response.ok) {
          // throw new Error(`API error: ${response.status}`);
          
            setLoading(true)
        }
        
        const data = await response.json();
        
        // Validate data is an array
        if (!Array.isArray(data)) {
            setLoading(true)
        }
        
        // Validate each product has required fields
        const validProducts = data.filter(product => 
          product && typeof product === "object" && "id" in product
        );
        
        setProducts(validProducts);
      } catch (err) {
        console.error("Failed to load:", err);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [])
  return (
    <div>
       <Navbar />
       <div className="container mx-auto w-[90%] md:w-[80%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 p-10 glass rounded-xl">
          
           {loading ? (<Loading />):
           products.map(product => (
          <Card key={product.id} product={product} />
        ))}
           
       </div>

       
    </div>
  )
}
