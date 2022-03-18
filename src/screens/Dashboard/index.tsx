import React, { useState, useEffect, useCallback } from 'react';

import  AsyncStorage  from '@react-native-async-storage/async-storage';

import { useFocusEffect} from '@react-navigation/native';

import { HighlightCard } from '../../components/HighlightCard';
import { TransationCard , TransationCardProps} from '../../components/TransationCard';



import { 
    Container ,
    Header,
    UserInfo,
    UserWrapper,
    Photo,
    User,
    UserGreeting,
    UserName,
    Icons,
    HighlightCards,
    Transations,
    Title,
    TransationList,
    LogoutButton,

} from './styles';

export interface DataListProps extends TransationCardProps {
    id: string;
}

export function Dashboard() {

   const [data, setData] = useState<DataListProps[]>();

   async function loadTransactions(){
    const dataKey = '@gofinances:transactions';
    const response = await AsyncStorage.getItem(dataKey);
    const transactions = response ? JSON.parse(response) : [];

    const transactionsFormatted: DataListProps[] = transactions.map((item: DataListProps) => {

       const amount = Number(item.amount).
       toLocaleString('pt-BR', {
           style:'currency',
           currency: 'BRL'
       });

      
       const date = Intl.DateTimeFormat('pt-BR', {
           day: '2-digit',
           month: '2-digit',
           year: '2-digit'
       }).format(new Date(item.date));

       return { 
           id: item.id,
           name: item.name,
           amount,
           type:item.type,
           category:item.category,
           date,
       }

    });

    setData(transactionsFormatted);
   };


   useEffect(() => {
    loadTransactions();
   }, []);

   useFocusEffect(useCallback(() => {
       loadTransactions();

     
   },[]))

    return (<Container>
               <Header>
                <UserWrapper>
                       <UserInfo>
                       <Photo 
                       source={{uri:'https://avatars.githubusercontent.com/u/68607000?v=4'}}
                       />
                       <User>
                           <UserGreeting>Ola,</UserGreeting>
                           <UserName>Bruno</UserName>
                       </User>
                   </UserInfo>
                   <LogoutButton onPress={() => {}}>
                        <Icons name="power"/>
                   </LogoutButton>
                 </UserWrapper>
               </Header>
               <HighlightCards>
                    <HighlightCard  type="up" title="Entradas" amount="R$ 16.400,00" lastTransaction=" 04 de abril de 2022"/>
                    <HighlightCard  type="down" title="Saidas" amount="R$ 2.300,00" lastTransaction=" 18 de abril de 2022"/>
                    <HighlightCard  type="total" title="Total" amount="R$ 78.200,00" lastTransaction=" 05 de abril de 2022"/>
                    
               </HighlightCards>

               <Transations>
                   <Title>Listagem</Title>

                   <TransationList 
                        data={data}
                        keyExtractor={item => item.id }
                        renderItem={({ item }) =><TransationCard data={item} /> }
                   /> 
               </Transations>
            </Container>
    )
}
