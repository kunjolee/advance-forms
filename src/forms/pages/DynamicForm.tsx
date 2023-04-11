import { Formik, Form } from 'formik';
import formJson from '../data/custom-form.json';
import { MySelect, MyTextInput } from '../components';
import * as Yup from 'yup';

const initialValues: { [key: string]: any } = {};
const fieldsWithValidation: { [key: string]: any } = {};
const validTypes = ['text', 'email', 'password'];

for (const input of formJson) {
    initialValues[input.name] = input.value;

    if (!input.validations) continue; //si no tiene el field validations, saltate el loop interation
    let schema = Yup.string();

    for (const rule of input.validations) {
        // hacer condicionales por todos los tipos de validaciones
        if (rule.type === 'required') {
            schema = schema.required(rule.description);
        }
        if (rule.type === 'minLength') {
            schema = schema.min((rule as any).value || 2, rule.description);
        }
        if (rule.type === 'email') {
            schema = schema.email(rule.description);
        }
    }

    fieldsWithValidation[input.name] = schema;
}

const validationSchema = Yup.object({ ...fieldsWithValidation });

export const DynamicForm = () => {
    return (
        <div>
            <h1>Dynamic form</h1>
            <Formik
                initialValues={initialValues}
                onSubmit={(values) => {
                    console.log(values);
                }}
                validationSchema={validationSchema}
            >
                {(formik) => (
                    <Form noValidate>
                        {formJson.map(({ value, type, options, ...field }) => {
                            if (validTypes.includes(type)) {
                                return (
                                    <MyTextInput key={field.name} type={type as any} {...field} />
                                );
                            } else if (type === 'select') {
                                return (
                                    <MySelect key={field.name} type={type as any} {...field}>
                                        <option value=''>Select an option</option>
                                        {options?.map(({ id, label }) => (
                                            <option value={id} key={id}>
                                                {label}
                                            </option>
                                        ))}
                                    </MySelect>
                                );
                            }

                            throw new Error(`Input type ${type} is not supported`);
                        })}
                        <button type='submit'>Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};
