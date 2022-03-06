import React from 'react';

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

    const data: DataListProps[] = [
        
        {
        id:'1', 
        type: "positive",
        title:"Desenvolvimento de sites",
        amount:"R$ 12.000,00",
        category:{
        name:"Vendas",
        icon:'dollar-sign'
     },
    date:"13/04/2022"
 },
        {
        id:'2',
        type: "negative",
        title:"Hamburgue Pixx",
        amount:"R$ 20,00",
        category:{
        name:"Alimentacao",
        icon:'coffee'
     },
    date:"13/04/2022"
 },
        {
        id:'3 ',
        type: "negative",
        title:"Aluguel do Apartamento",
        amount:"R$ 1.200,00",
        category:{
        name:"Casa",
        icon:'shopping-bag'
     },
    date:"24/04/2022"
 },
];

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
