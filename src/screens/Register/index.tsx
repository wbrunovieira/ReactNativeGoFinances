import React, { useState } from "react";
import { Modal } from 'react-native';
import { useForm } from 'react-hook-form';

import { Button } from "../../components/Forms/Button";
import { CategorySelectButton } from "../../components/Forms/CategorySelectButton";
import { Input } from "../../components/Forms/Input";
import { InputForm } from "../../components/Forms/InputForm";
import { TransactionTypeButton } from "../../components/Forms/TransactionTypeButton";

import {  CategorySelect } from '../CategorySelect';

import { 
    Container,
    Header,
    Title,
    Form,
    Fields,
    TransactionsTypes,
} from "./styles";

interface FormData {
    name: string;
    amount: string
}

export function Register(){
    
    const [transactionType, setTransationType ] = useState('');
    const [ categoryModalOpen, SetCategoryModalOpen ] = useState(false); 

    const [category, setCategory] = useState({
        key: 'category',
        name: 'Categoria',
        
    });

    const {
        control,
        handleSubmit
     } = useForm();

    function handleTransactionTypeSelect(type: 'up' | 'down' ){
        setTransationType(type);
    }

    function handleOpenSelectionCategoryModal(){
        SetCategoryModalOpen(true);
    };
    
    function handleCloseSelectionCategoryModal(){
        SetCategoryModalOpen(false);
    };

    function handleRegister(form: FormData){
        const data = {
            name: form.name,
            amount: form.amount,
            transactionType,
            category:category.key
        }
        console.log(data)
    }

    return(
        <Container>
            <Header>
                <Title>Cadastro</Title>
            </Header>

            <Form>

                <Fields>
                    <InputForm
                        name="name"
                        control={control}
                        placeholder="Nome"
                    />

                    <InputForm 
                        name="amount"
                        control={control}
                        placeholder="Preco"
                    />

                    <TransactionsTypes>

                        <TransactionTypeButton 
                            type="up"
                            title="Income"
                            onPress={() => handleTransactionTypeSelect('up')}
                            isActive={transactionType === 'up'}
                        />
                        <TransactionTypeButton 
                            type="down"
                            title="Outcome"
                            onPress={() => handleTransactionTypeSelect('down')}
                            isActive={transactionType === 'down'}
                        />

                    </TransactionsTypes>
                    
                    <CategorySelectButton
                       title={category.name}
                       onPress={handleOpenSelectionCategoryModal}
                       />

                </Fields>

                

                <Button
                  title="Enviar"
                  onPress={handleSubmit(handleRegister)}
                 />
            </Form>

            <Modal visible={categoryModalOpen}>
                <CategorySelect
                    category={category}
                    setCategory={setCategory}
                    closeSelectCategory={handleCloseSelectionCategoryModal}
                />
            </Modal>
        </Container>
    )
}