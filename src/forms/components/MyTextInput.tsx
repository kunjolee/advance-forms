import { ErrorMessage, useField } from 'formik';

interface Props {
    label: string;
    name: string;
    type?: 'text' | 'email' | 'password';
    placeholder?: string;
    [x: string]: any; // Añadir cualquier cantidad de propiedades adicionales. recibir cualquier llave de tipo string y su valor es de cualquier cosa
}

export const MyTextInput = ({ label, ...props }: Props) => {
    // Hay un formik context creado por el componente <Formik></Formik>

    // useField va a ir a ese contexto, tomarlo y traer todas las propiedades. (onBluer, on change, value) y extraerlos y mediante el custom hook useFiel, vamos a poder acceder a esas propiedades

    const [field, metadata] = useField(props);
    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <input className={`${metadata.error && 'has-error'}`} {...field} {...props} />
            <ErrorMessage name={props.name} component='span' className='custom-span-error' />
            {/* {metadata.touched && metadata.error && <span>{metadata.error}</span>} */}
        </>
    );
};
