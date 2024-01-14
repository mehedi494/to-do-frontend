
import { Input } from 'antd';
const FormInput = (label,icon,size,placeholder) => {
  return (
    <>
    <p>{label}</p>
     <Input size={!size?"large":size} placeholder={placeholder} prefix={!icon?"":icon} />
     </>
  );
};

export default FormInput;