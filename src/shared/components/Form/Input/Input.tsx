import { Form, FloatingLabel, Col } from 'react-bootstrap';
import { InputProps } from '../../..';


export const Input = ({ label, name, register, validationSchema, error } : InputProps<any>) => { 
  const hasError = error !== undefined;

  return (
    <Form.Group as={Col} controlId={name.toString()} className={hasError ? 'has-error' : ''}>
      <FloatingLabel controlId={name.toString()} label={label}>
        <Form.Control
          {...register(name, {
            validate: (value) => {
              if (!validationSchema) return true;

              try {
                validationSchema.validateSyncAt(name.toString(), { [name]: value });
                return true;
              } catch (error) {
                return false;
              }
            },
          })}
          isInvalid={hasError}
        />
        {hasError && <Form.Control.Feedback type="invalid">{error?.message}</Form.Control.Feedback>}
      </FloatingLabel>
    </Form.Group>
  );
};
