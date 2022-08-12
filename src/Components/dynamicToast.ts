import {toast} from "react-toastify";

const dynamicToast = (message: string, winner?: string) => {
    if (winner === 'X') {
        toast.success(message,
            {
                toastId: 1,
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        return
    }
    if (winner === 'O') {
        toast.error(message,
            {
                toastId: 2,
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        return
    }
    toast.warning(message,
        {
            toastId: 3,
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })
}
export default dynamicToast