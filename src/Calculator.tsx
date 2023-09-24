import React, { ChangeEvent } from 'react';
import s from "./Calculator.module.css"
import {
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    OutlinedInput,
    Select,
    SelectChangeEvent,
    TextField,
    Grid
} from "@material-ui/core";

type CalculatorPropsType = {
    setName: (value: string) => void;
    name: string;
    value3X: string;
    value2X: string;
    set3XTraining: (value: string) => void;
    set2XTraining: (value: string) => void;
    price:string;
    setPrice:(value: string) => void;
    setCheckout:(value:boolean)=> void;
    calculate:()=>void;
}

export const Calculator = (props: CalculatorPropsType) => {
    console.log("CALCULATOR")
    const set3XTraining = (e: ChangeEvent<HTMLInputElement>) => {
        props.set3XTraining(e.currentTarget.value);
    };

    const set2XTraining = (e: ChangeEvent<HTMLInputElement>) => {
        props.set2XTraining(e.currentTarget.value);
    }

    function onChangeNameHandler(e: SelectChangeEvent<string>) {
        props.setName(e.target.value);
    }
    function onChangePriceInput(e: ChangeEvent<HTMLInputElement>) {
        props.setPrice(e.target.value);
    }

    const  onclickHandler=()=> {
        props.setCheckout(true);
        props.calculate()

    }

    return (
        <div>
            <div className={s.upperRectangle}>
                <Grid container spacing={2} justifyContent="center">
                    <Grid item xs={12}>
                        <FormControl sx={{ width: "100%" }}>
                            <InputLabel shrink id="NameInput" style={{ color: 'white' }}>
                                SAY. YOUR. NAME.
                            </InputLabel>
                            <Select
                                labelId={"NameInput"}
                                id="Name-select-helper"
                                value={props.name}
                                input={<OutlinedInput notched label="Name" />}
                                onChange={onChangeNameHandler}
                                style={{ color: 'white', backgroundColor: '#383232'}}
                                MenuProps={{ PaperProps: { style: { backgroundColor: '#383232' } } }}
                            >
                                <MenuItem value={"Антон"} style={{ color: 'white'}}>Антон</MenuItem>
                                <MenuItem value={"Кирилл"} style={{ color: 'white' }}>Кирилл</MenuItem>
                                <MenuItem value={"Саша"} style={{ color: 'white' }}>Саша</MenuItem>
                                <MenuItem value={"Таня"} style={{ color: 'white' }}>Таня</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl sx={{ width: "100%" }}>
                            <InputLabel shrink id="MondayInput" style={{ color: 'white' }}>
                                КОЛ-ВО ЗАНЯТИЙ НА 3х
                            </InputLabel>
                            <TextField value={props.value3X} type={"number"} onChange={set3XTraining} InputProps={{ style: { color: 'white' } }} />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl sx={{ width: "100%" }}>
                            <InputLabel shrink id="ThursdayInput" style={{ color: 'white' }}>
                                КОЛ-ВО ЗАНЯТИЙ НА 2х
                            </InputLabel>
                            <TextField value={props.value2X} type={"number"} onChange={set2XTraining} InputProps={{ style: { color: 'white'} }} />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl sx={{ width: "100%" }}>
                            <InputLabel shrink id="ThursdayInput" style={{ color: 'white' }}>
                                СТОИМОСТЬ ЗАНЯТИЯ
                            </InputLabel>
                            <TextField value={props.price} type={"number"} onChange={onChangePriceInput} InputProps={{ style: { color: 'white' } }} />
                        </FormControl>
                    </Grid>
                </Grid>
            </div>
            <div className={s.button}>
                <Button variant="contained" size="large" onClick={onclickHandler}>get horny now 🦄
                    </Button>
            </div>
        </div>
    );
}
