import {toast} from "react-toastify";

const dynamicToast = (inputWinner: string, winner?: string) => {
    if (winner === 'X') {
        toast.success(inputWinner,
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
    } else
        toast(inputWinner,
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
}
export default dynamicToast