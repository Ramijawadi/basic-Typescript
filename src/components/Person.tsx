import { FC, useState, ChangeEvent} from 'react';


//enum
export enum HairColor {
blond="your haire is blonde ",
brown = "it is a cool hair color",
pink = "wow so beautiful color"

}
//type
type NameType = "rami" | "alex" |"aissa" | "arbi"
let name : NameType= "arbi"

interface Props {
    name: string;
    lastname: string;
    age: number;
    HairColor:HairColor

}





//props in Typescript
export const Person: FC<Props>= ({name, lastname, age , HairColor }) => {

    const [country, setCountry] = useState<string | null>("")

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setCountry(event.target.value)
    

}

return (
    <div>
        <h1>{name}</h1>
        <h1>{lastname}</h1>
        <h1>{age}</h1>

        <input placeholder='enter your country ...' onChange={handleChange} />
        {country}
        {HairColor}
    </div>
);
}
