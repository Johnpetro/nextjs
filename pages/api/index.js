// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default async function handler(req, res) {
//   // res.status(200).json({ name: "John Doe" })
//   // ;
//   try{
//     const  response = await fetch('https://fakestoreapi.com/products/')
//     const data =  await response.json();
//     res.status(200).json(data);
//   }catch(error){
//         res.status(500).json({ error: 'Failed to fetch products' });

//   }
// }

const getProduct =  async (req , res)=>{
  try{
     const  response = await fetch('https://fakestoreapi.com/products/')
     const data =  await response.json();
     res.status(200).json(data);
  }catch(error){
    res.status(400).json({message:"no product found"})
  } 
}
export default getProduct