export const productReducer=(state={product:[]},action)=>{
if(action.type==="ADD_PRODUCT"){
    return{...state,product:[...action.data,...state.product]}
}
if(action.data==="SELECTED_PRODUCT"){
    return{...state,selectedProd:[action.data]}
}
if(action.data==="REMOVED_PRODUCT"){
    const Fill= state.product.filter((item)=>item !==action.data)
    return{...state, product:[...Fill]}
}
}