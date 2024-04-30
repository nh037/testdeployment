// "use client"
// import React from 'react'

// const page = () => {
//   let marks=80
//   const changeMarks=()=>{
//     console.log(marks)
//     marks=33
//     console.log(marks)
//   }
//   return (
//     <>
//     <h1 className='font-bold text-xl text-red-500'>My total marks were {marks}</h1>
//     <button onClick={changeMarks} className='bg-gray-400 px-5 py-2 rounded mt-5 text-white font-bold'>Update</button>
//     </>
//   )
// }

// export default page


"use client"
// import axios from 'axios'
// import { MyContext } from '@/Helper/Context'
// import React,{useState} from 'react'

// const page = () => {
//   const[marks,setMarks]=useState(80)
//   return (
//     <>
//     <h1>My marks were {marks}</h1>
//     <button onClick={()=>{
//       setMarks(33)
//     }}>Update</button>
//     </>
//   )
// }

// export default page

// "use client"
// import React, { useState } from 'react'
// import Header from '@/Components/Header'

// const page = () => {
//   const [user,setUser]=useState("Nitish")
//   const [editor,seteditor]=useState("Sarthak")
//   return (
//     <>
//     <Header user={user} edit={editor}/>
//     {user}
//     </>
//   )
// }

// export default page



// import React from 'react'

// import Link from "next/link"
// const page = () => {
//   return (
//     <div>
//       <Header/>
//       <h1>This is Home Page</h1>
//       {/* <Link href={"/About"}>About</Link>
//       <Link href={"/Product"}>Product</Link>
//       <Link href={"/Courses"}>Courses</Link> */}
//       {/* <h1>This is Home Page</h1>
//       <a href='/About'>About</a>
//       <a href='/Product'>Product</a>
//       <a href='/Courses'>Courses</a> */}
//     </div>
//   )
// }

// export default page

// import React, { useState } from 'react'
// import axios from 'axios'
// const page = () => {
//   const [Images,setImages]=useState([])
//   const getImages= async ()=>{
//     try
//     {
//     const response = await axios.get("https://picsum.photos/v2/list")
//     const data = response.data;
//     setImages(data)
//     console.log(Images)
//   } catch(error){
//     console.error("Error Fetching Images");
//   }
// };
//   return (
//     <div>
//      <button onClick={getImages} className='px-5 py-3 bg-green-600 text-white font-bold'>Get Images</button>
//      <div className='p-10'>
//        {Images.map((elem,i)=>{
//         return <img key={i} src={elem.download_url}
//        width={300}
//        height={300}
//        className="m-10 rounded inline-block"
//        />
//        })}
//      </div>
//     </div>
//   )
// }

// export default page;

// "use client"

// import React,{useState} from 'react'
// import Header from '@/Components/Header'
// const page = () => {
//   const [num, setNum] = useState(10)
//   return (
//     <div>
//       <Header num={num}/>
//     </div>
//   )
// }

// export default page

//********Context Api************//
// import Header from '@/Components/Header'
// import React, { useContext } from 'react'
// import { MyContext } from '@/Helper/Context'
// const page = () => {
//   const user = useContext(MyContext)
//   console.log(user)
//   return (
//     <div>
//       {user}
//       <Header/>
//     </div>
//   )
// }

// export default page

//********React Toastify Notification************//
// import React from 'react'
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// const page = () => {
//   const notify=()=>{
//     toast.success('🦄 Wow so easy!', {
//     position: "top-center",
//     autoClose: 5000,
//     hideProgressBar: false,
//     closeOnClick: true,
//     pauseOnHover: true,
//     draggable: true,
//     progress: undefined,
//     theme: "dark",
    
// });

//   }
//   return (
//     <div>
//       <button onClick={notify}>Login</button>
//       <ToastContainer/>
//     </div>
//   )
// }

//********Server Side Rendering************//
// import React, { useState } from 'react'
// import axios from 'axios'
// const page = () => {
//   const [userdata,setUserdata] = useState("")
//   const[num,setnum]=useState(10)
//   const getData = async()=>{
//     const response= await axios.get("https://picsum.photos/v2/list")
//     const a = JSON.stringify(response.data)
//     console.log(a)
//     setUserdata(a)
//   }
//   return (
//     <div>
//       <button onClick={getData}>click</button>
//        <br />
//        {userdata}
//     </div>
//   )
// }

// export default page

//********Deployment************//
import React from 'react'

const page = () => {
  return (
    <div>
      Deployment
    </div>
  )
}

export default page




