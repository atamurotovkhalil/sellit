import {create} from "zustand"

export const usePopup = create((set)=>({
    popup: false,
    setPopup: (state)=> set({popup: state}),
    closePopup: ()=> set({popup: false}),
    buyNow: ()=> {
        set({popup: true});
        setTimeout(()=>{
            set({popup: false});
        }, 1000)
    }
}))