import React, { useState , useEffect} from "react";
import {
     Modal,
    TouchableWithoutFeedback,
     Keyboard,
    Alert,
    
    
    } from 'react-native';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from "yup";

import  AsyncStorage  from '@react-native-async-storage/async-storage';

import { Button } from "../../components/Forms/Button";
import { CategorySelectButton } from "../../components/Forms/CategorySelectButton";

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

const schema = Yup.object().shape({
    name:Yup
    .string()
    .required('Nome e obrigatorio'),
    amount: Yup
    .number()
    .typeError('Informe um valor numerico')
    .positive('o valor nao pode ser negativo')
    .required('o valor e obrigatorio')
});

const dataKey = '@gofinances:transactions';

export function Register(){
    
    const [transactionType, setTransationType ] = useState('');
    const [ categoryModalOpen, SetCategoryModalOpen ] = useState(false); 

    const [category, setCategory] = useState({
        key: 'category',
        name: 'Categoria',
        
    });

    const {
        control,
        handleSubmit,
        formState: { errors }
     } = useForm({
         resolver: yupResolver(schema)
      });

    function handleTransactionTypeSelect(type: 'up' | 'down' ){
        setTransationType(type);
    }

    function handleOpenSelectionCategoryModal(){
        SetCategoryModalOpen(true);
    };
    
    function handleCloseSelectionCategoryModal(){
        SetCategoryModalOpen(false);
    };

    async function handleRegister(form: Partial<FormData>){

        if(!transactionType){
            return Alert.alert('Selecione o tipo da transacao');

        }

        if(category.key === 'category'){
            return Alert.alert('Selecione a categoria');

        }
        const data = {
            name: form.name,
            amount: form.amount,
            transactionType,
            category:category.key
        }
        
        try {
            

           await  AsyncStorage.setItem(dataKey,JSON.stringify(data));

        } catch (error) {
            console.log(error);
            Alert.alert('Nao foi possivel salvar');
            
        }
    }

    useEffect(() => {
        async function loadData() {
         
            const data = await AsyncStorage.getItem(dataKey);
            console.log(JSON.parse(data!));
        }

        loadData();

    }, []);

    return(
        <TouchableWithoutFeedback 
                    onPress={Keyboard.dismiss}
        >
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
                            autoCapitalize="sentences"
                            autoCorrect={false}
                            error={errors.name && errors.name.message}
                        />

                        <InputForm 
                            name="amount"
                            control={control}
                            placeholder="Preco"
                            keyboardType="numeric"
                            error={errors.amount && errors.amount.message}
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
        </TouchableWithoutFeedback>
    )
}