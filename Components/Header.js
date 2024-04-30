// import React from 'react'
// import Link from 'next/link'
// const Header = () => {
//   return (
//     <div className='h-16 px-5 text-white bg-red-500 flex items-center justify-between'>
//         <h2>Logo</h2>
//         <div className='flex gap-8'>
//             {/* <h4>About</h4>
//             <h4>Career</h4>
//             <h4>Blog</h4>
//             <h4>{props.edit}</h4> */}
//             <Link href={"/About"}>About</Link>
//       <Link href={"/Product"}>Product</Link>
//       <Link href={"/Courses"}>Courses</Link>
//         </div>
//     </div>
//   )
// }

// export default Header

import React, { useContext } from 'react'
import Nav from './Nav'
import { MyContext } from '@/Helper/Context';
const Header = (props) => {
  const user = useContext(MyContext)
  return (
    <div className='bg-green-200 p-5'>
      {/* Got It
      <Nav num={props.num}/> */}
      {user}
    </div>
  );
};

export default Header
