import { useSelector } from "react-redux";
//import { store } from "../../store";

export const Prueba = () => {
    //declaring selector
    const selectReducer1 = state => state.reducer1

    //passing this selector to the useSelector hook
    const phrase = useSelector(selectReducer1)

    return (
        <div>
            <h1> esto es el contenido de la propiedad selectorReducer1 en el store</h1>
            {phrase}
        </div>
    )
}
