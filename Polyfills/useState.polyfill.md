function useStatePolyfill(initialValue){
    return useReducer((state, newValue) => newValue, initialValue);
}