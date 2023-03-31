
import { FaBeer } from 'react-icons/fa';

const Header = () => {
    return   <header className="bg-red-500">
    <div className="container w-1/3  h-[64px] mx-auto flex items-center gap-7">
        <img className="w-[64px] pl-2" src="/logo.png" alt="" />

         <input  className="pl-2 rounded-lg grow h-[34px] "type="text"  placeholder="search" />
         <div className="absolute top-0 left-0 mt-2 ml-3 text-gray-600">
    <i className="fas fa-search"></i>
  </div>
       
       

    </div>
</header>
}

export default Header