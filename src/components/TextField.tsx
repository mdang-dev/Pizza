type Props = {
    placeholder: string;
    value?: string;
    width?: string;
    height?: string;
    onChange?: (value: string) => void; 
};

const TextField = ({
    width = 'w-[100%]',
    height = 'h-[20px]',
    onChange,
    ...props
}: Props) => {
    return (
        <input type="text" 
         {...props}
         className= {`${'ct-text-field'} ${width} my-5 ml-28`} 
         onChange={(e) => onChange && onChange(e.target.value)}
        />
    );
};

export default TextField;