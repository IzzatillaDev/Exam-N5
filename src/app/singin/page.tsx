// "use client"
// import { Input } from 'antd'
// import React from 'react'
// import { login } from '../../../service/auth.service'
// import "./style.scss"

// const page = () => {
//     const submit = async (form: FormData) => {
//         const payload = {
//             username: form.get("username"),
//             password: form.get("password")
//           }

//           console.log(payload)

//           const status = await login(payload)



//     }
//     return (
//         <>
//             <section className="register">
//                 <div className="containers">
//                     <h2 className="register_title">Login</h2>
//                     <div className="forms">
//                         <form action={submit} className="form">

//                             <div className='first'>
//                                 {/* <h2 className="username">Username</h2> */}
//                                 <Input name="username" className="username_input" type="text" placeholder="Username" />
//                             </div>

//                             <div className='second'>
//                                 {/* <h2 className="password">Password</h2> */}
//                                 <Input name="password" className="password_input" type="password" placeholder="Password" />
//                             </div>
//                             <button type="submit" className="btn">Submit</button>
//                             {/* <Link href="/register">
//                 <div>
//                   <h2 className="to_register">Register</h2>
//                 </div>
//               </Link> */}


//                         </form>
//                     </div>

//                 </div>

//             </section>
//         </>
//     )
// }

// export default page

"use client"
import { Input } from 'antd'
import React from 'react'
import { login } from '../../../service/auth.service'
import "./style.scss"
import Link from 'next/link'

const page = () => {
    const submit = async (formData: FormData) => {
        const payload = {
            username: formData.get("username")?.toString(),
            password: formData.get("password")?.toString(),
        }

        console.log(payload)

        try {
            const status = await login(payload)
            console.log('Login successful:', status);
        } catch (error) {
            console.error('Login failed:', error.response?.data || error.message);
        }
    }

    return (
        <>
            <section className="register">
                <div className="containers">
                    <h2 className="register_title">Login</h2>
                    <div className="forms">
                        <form action={submit} className="form">
                            <div className='first'>
                                <Input name="username" className="username_input" type="text" placeholder="Username" />
                            </div>
                            <div className='second'>
                                <Input name="password" className="password_input" type="password" placeholder="Password" />
                            </div>
                            <Link href="/">
                            <button type="submit" className="btn">Submit</button>
                            </Link>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default page
