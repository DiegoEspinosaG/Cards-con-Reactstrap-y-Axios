import React, { useState } from 'react'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Form, FormGroup, Input, Label } from 'reactstrap';
import axios from 'axios';

export const AddCategory = ({ /* setCategories, */ setPokemon }) => {

    const [inputValue, setInputValue] = useState('');
    const [disableFields, setDisableFields] = useState(1)
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [type, setType] = useState('')

    const types = ['normal', 'fighting', 'flying', 'poison', 'ground', 'rock', 'bug', 'ghost',
        'steel', 'fire', 'water', 'grass', 'electric', 'psychic', 'ice', 'dragon', 'dark', 'fairy'];

    const toggle = () => setDropdownOpen(prevState => !prevState);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length > 2 || type.length > 1) {
            //setCategories(inputValue);

            if (disableFields === 1) {
                getPokemon('pokemon/'+inputValue, 'pokemon');
            }
            else {
                getPokemon('type/'+type, 'type');
            }            

            setType('');
            setInputValue('');            
        }

    }

    const getPokemon = (ext, filter) => {

        const url = `https://pokeapi.co/api/v2/${encodeURI(ext)}`;

        axios.get(url)
            .then(res => {
                console.log(res.data)
                console.log(filter);
                setPokemon({
                    data: res.data, 
                    typeSearch: filter
                })
            })
            .catch(
                alert(`There is no endpoint ${ext} in the database`)
            )
    }

    return (
        <>
            <FormGroup tag="fieldset" className="radiobtn-container">
                <FormGroup check className="radio-input">
                    <Label check>
                    <Input 
                        type="radio" 
                        name="radio1" 
                        defaultChecked
                        onClick={() => setDisableFields(1)}
                    />{' '}
                        Search for pokemon name
                    </Label>
                </FormGroup>
                <FormGroup check className="radio-input">
                    <Label check>
                    <Input 
                        type="radio" 
                        name="radio1" 
                        onClick={() => setDisableFields(2)}
                    />{' '}
                        Search for pokemon type
                    </Label>
                </FormGroup>
            </FormGroup>

            <Form className="form-search" onSubmit={handleSubmit}>
                <Input
                    type="text"
                    placeholder="Search your Pokémon!"
                    value={inputValue}
                    onChange={handleInputChange}
                    className="input-search"
                    disabled={disableFields === 2 ? true: false}
                />
                <Dropdown 
                    isOpen={dropdownOpen} 
                    toggle={toggle} 
                    className="drop-types"
                    disabled={disableFields === 1 ? true: false}
                >
                    <DropdownToggle caret>
                        Pokemon type
                    </DropdownToggle>
                    <DropdownMenu>
                        {
                            types.map((type, index)=>(
                                <DropdownItem 
                                    key={index} value={type} onClick={() => setType(type)}>{type}                                    
                                </DropdownItem>
                            ))
                        }
                    </DropdownMenu>
                </Dropdown>
                <img
                    className="input-ico" src="https://i.pinimg.com/originals/ed/a7/89/eda7894277f3820de80ebb7cb691b9d5.png"
                    onClick={handleSubmit}
                    alt="Search icon"
                />
            </Form>
        </>
    )

}