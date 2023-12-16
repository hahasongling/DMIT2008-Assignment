import Link from "next/link"
import { TbSquareLetterS } from "react-icons/tb";
import { FaShoppingCart } from "react-icons/fa";
 function NavBar ( {children}){
    return (
        <nav className="py-4 px-4  bg-orange-50">
            <ul className="flex justify-between gap-x-8 items-center">
                <li><Link className="text-black font-medium" href="/">
                        <figure className="flex items-center text-black gap-1">
                            <TbSquareLetterS className="w-8 h-8"/>
                        <figcaption className="text-ml">Songling's Store</figcaption>
                        </figure>
                    </Link>
                </li>
                
                <li><Link className="text-lg font-bold" href="/products">Products</Link></li>
                
                <li><Link className="text-lg font-bold" href="/">Contact us</Link></li>

                <li><Link className="text-lg font-bold" href="/">Sale</Link></li>

                <li><Link className="text-lg font-bold" href="/">Help</Link></li>

                <li><Link className="text-blue-600 font-medium" href="/">
                       
                       <FaShoppingCart className="w-8 h-8 text-black"/>
                </Link></li>
            </ul>
        </nav>
    )
 }



 export {NavBar}