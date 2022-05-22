const initialState={
    selecteditem:{items:[],restorantsname:''}
}

const UBERCART=(state=initialState,action)=>{
    switch (action.type) {
        case "ADD_TO_CART":
            let newstate= {...state};
            newstate.selecteditem={
                items:[...newstate.selecteditem.items,action.payload],
                restorantsname:action.payload.restorantsname,
            }
            console.log(":right ",newstate);
            return newstate;
    
        case "REMOVE TO CART":

            break;
        default:
            return state;
    }
}

export default UBERCART;