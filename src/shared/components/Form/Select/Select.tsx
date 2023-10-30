import { Form, FloatingLabel, Col } from 'react-bootstrap';
import { SelectProps } from '../../..';



export const Select = ({ label, name, register, options } : SelectProps) => {
  return (
    <Form.Group as={Col} controlId={name.toString()}>
      <FloatingLabel controlId={name.toString()} label={label}>
        <Form.Select {...register(name)}>
          <option value="">Select...</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Form.Select>
      </FloatingLabel>
    </Form.Group>
  );
};