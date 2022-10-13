import  React, {FC} from 'react';

 interface  Props {
    modele: string,
    name:string,
    vitesse : number
}

export const Voiture: FC<Props> =  ({modele,name ,vitesse}) => {
  return (
    <div>
      <h1>{modele}</h1>
      <h1>{name}</h1>
      <h1>{vitesse}</h1>
      
    </div>
  );
}
