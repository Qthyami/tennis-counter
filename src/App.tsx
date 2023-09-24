import React, { useState} from 'react';

import s from './App.module.css';

import {StartMessage} from "./StartMessage";
import {Calculator} from "./Calculator";
import {CheckOut} from "./CheckOut";


function App() {
    console.log("App")
    const [startMessage, setStartMessage]=useState<boolean>(true);
    const [name, setName]=useState<string>("");


    const[trains3X,setTrains3X]=useState<string>("")

    const[trains2X,setTrains2X]=useState<string>("")
    const onChangeNameHandler=(value:string)=>{
        setName(value)
    }
    const [price,setPrice]=useState<string>("110")
    const [showCheckOut , setShowCheckOut] = useState<boolean>(false);
    console.log(showCheckOut)
    const [result,setResult]=useState<number>(0)

    const Calculate = ()=>{
        setResult(Math.round((Number(price) / 2) * Number(trains2X) + (Number(price) / 3) * Number(trains3X)))
    }



    return (
        <div className={s.App}>
            <div className={s.container}>
                {startMessage?<StartMessage EnterMessage={()=>setStartMessage(false)}/>
                    : showCheckOut ? (

                    <CheckOut result={result}
                              name={name}
                    />
                ) : <Calculator
                    name={name}
                    setName={onChangeNameHandler}
                    value3X={trains3X}
                    set3XTraining={(value)=>setTrains3X(value)}
                    value2X={trains2X}
                    set2XTraining={(value)=>setTrains2X(value)}
                    price={price}
                    setPrice={setPrice}
                    setCheckout={setShowCheckOut}
                    calculate={Calculate }



                />}

            </div>
        </div>

    );
}

export default App;
