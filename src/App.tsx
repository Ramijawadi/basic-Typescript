import React, { FC ,createContext } from 'react';
import './App.css';
import { Person, HairColor } from './components/Person';
import { Voiture } from './components/Voiture';


interface AppContextInterface  {

  name:string;
  age:number;
  ville:string;
  isMarried: boolean;

}

const AppContext = createContext<AppContextInterface | null>(null)
const ContextValue:AppContextInterface = {

  name:"rami",
  age:30,
  ville:"Tunisie",
  isMarried: false,
}


const App: FC = () => {
  return (

    <AppContext.Provider  value={ContextValue}>
      <div className="App">
        <Person name='ramos' lastname='jawadi' age={30} HairColor={HairColor.pink} />
        <Voiture modele='familiale' name='marcedes' vitesse={300} />
      </div>
      </AppContext.Provider>  

  );
}

export default App;
