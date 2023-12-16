import Link from 'next/link'
import Image from 'next/image'
import { PageHeader } from "../../components/header/PageHeader"
import { getEmployees } from "@/lib/firebase/getEmployees";
 

// Link element to create a dynamic route.
function Card ({uid, productName, shortDescription, productImage,productPrice}){
  return (
      <div className="max-w-7xl bg-orange-50 py-20 mx-auto sm:flex sm:justify-center sm:items-center  sm:gap-x-12 ">
         <div className='bg-slate-100 flex flex-row ml-10 mr-10'>
          
          <Image 
          src={`/${productImage}`}
          width={380}
          height={380}
          alt={productName}/>

          <div className='pt-6 md:p-8 text-center md:text-left space-y-4'>
          <Link className='text-4xl font-bold tracking-tight text-gray-900' href={`/product//${uid}`}> Product Name: {productName}</Link>
          <h2 className='text-lg leading-8 text-gray-600'>Product Price: {productPrice}</h2> 
          <h2 className='text-lg leading-8 text-gray-600'>Product ID: {uid}</h2> 
          <h2 className='text-lg leading-8 text-gray-600'>Product Description: {shortDescription}</h2> 
          
          <div class="grid grid-cols-3 gap-4 place-items-start ...">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div>
                <Link className='text-2xl font-bold tracking-tight text-gray-600 place-content-end' href={`/product/${uid}`}>More Details</Link>
         </div>
            </div>
          </div> 
          
         </div>
      </div>
  )
}
 

 async function EmployeesPage (  ) {
    const payload = await getEmployees();
    const keys =  Object.keys(payload)
    const values = Object.values(payload)
    const entries = Object.entries(payload)
    const dataLoading = true;

    //  conditional rendering data loading
    // if(dataLoading) {
    //   return  null
    // }
    
    // if(!dataLoading) {
    //   return <p>You have the data</p>
    // }

   return(
    <>
    <PageHeader title="Enjoy shopping at Songling's store" tagline="Without you, we wouldn't be us."/>
    <main className=" min-h-screen py-24">
       {
          values.map(item=> <Card  key={item.uid} {...item}/>)
       }
     </main>
    </>
   )
  
  
}

export default EmployeesPage