import {Bounce, TypeOptions, toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'; 
import 'react-toastify/dist/ReactToastify.css';


// type NotificationProps = {
//     title: string;
//     type: "success" | "error" | "info" | "warning" | "default";
// };

 interface NotificationProp{
    title: string;
    type: TypeOptions | undefined
}


const Notification = (prop:NotificationProp)=>{
    return toast(prop.title, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        type: prop.type,
    })
}

// const Notification = ({ title, type }: NotificationProps) => {
//     toast[type](title); // This triggers the toast with the specified type
// };

export default Notification
