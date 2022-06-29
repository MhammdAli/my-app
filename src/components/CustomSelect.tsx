import { FieldProps } from "formik"; 
import Select,{Theme} from "react-select"; 
import HelperText from "./HelperText";
 
interface Option {
    label: string;
    value: string;
}

interface CustomSelectProps extends FieldProps {
    options: Array<Option>;
    isMulti?: boolean;
    className?: string;
    placeholder?: string; 
    error ?: boolean;
    errorText ?: string,
    startIcon ?: any
}
  
export const CustomSelect = ({className,placeholder,field,form,options,isMulti = false,error,errorText,startIcon}: CustomSelectProps) => {

    const onChange = (option: Option | Option[]) => {
     
      form.setFieldValue(
        field.name,
        isMulti
          ? (option as Option[]).map((item: Option) => item.value)
          : (option as Option).value
      );
    };
  
    const getValue = () => {
      if (options) {
        return isMulti
          ? options.filter(option => field?.value?.indexOf(option.value) >= 0)
          : options.find(option => option?.value === field.value);
      } else {
        return isMulti ? [] : ("" as any);
      }
    }; 

    return (
      <div>
        <div className="flex">
          {!!startIcon &&
            <div className='flex items-center justify-center bg-primary-light px-5 text-white'>
            {startIcon} 
            </div>
          }
          <Select
            className={`flex-grow rounded-none ${className}`}
            name={field.name}  
            value={getValue()}
            onChange={onChange}
            placeholder={placeholder}
            options={options}
            isMulti={isMulti}  
            theme={(theme : Theme)=>{return {...theme,borderRadius : 0}}}
          />
          </div>
          {error && <HelperText title={errorText} className='text-red-700  font-bold py-1 my-0'/>}
      </div>
    );
  };