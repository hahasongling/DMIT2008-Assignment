 import Link from 'next/link'
 import Image from 'next/image'
 import { PageHeader } from "../../../components/header/PageHeader"
 import { getEmployees } from "@/lib/firebase/getEmployees";
 

async function getEmployee(id) {
    const payload = await getEmployees();
    const employees = Object.values(payload)
    const values = Object.values(payload)
    const singleItem = employees.find(item => item.uid == id)
    console.log(singleItem)
    return singleItem
}
async function EmployeePage ({params}){
   console.log(params)
   const id = params.id
   const employee = await getEmployee(id)

   return (
    <>
  <PageHeader title="Product you have selected." tagline="Enjoy shopping at our store"/>
     <main>
     <div className="max-w-7xl bg-orange-50 py-20 mx-auto sm:flex sm:justify-center sm:items-center  sm:gap-x-12 mt-20">
        <div className='mb-5'>
        <aside className='md:flex bg-slate-100 mr-10 ml-10'>
          <Image 
          src={`/${employee.productImage}`}
          width={380}
          height={380}
          alt={employee.productName}
          />
          <div className='pt-6 md:p-8 text-center md:text-left space-y-4'>
          <h2 className='text-lg leading-8 text-gray-600'>Product Name: {employee.productName}</h2>
          <h2 className='text-lg leading-8 text-gray-600'>Product Price: {employee.productPrice}</h2> 
          <h2 className='text-lg leading-8 text-gray-600'>Product ID: {id}</h2> 
          <h2 className='text-lg leading-8 text-gray-600'>Product Description: {employee.shortDescription}</h2> 
          <div class="grid grid-cols-3 gap-4 place-items-start ...">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div>
                <Link className='text-2xl font-bold tracking-tight text-gray-600 place-content-end' href={`/products`}>Add to cart</Link></div>
            </div>
          
          </div> 
  
         </aside>
         </div>
      </div>

    </main>
    </>
    );
}  

export default EmployeePage