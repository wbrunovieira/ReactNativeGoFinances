import React from 'react';
import { HighlightCard } from '../../components/HighlightCard';



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
    HighlightCards
} from './styles';

export function Dashboard() {
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
                   <Icons name="power"/>
                 </UserWrapper>
               </Header>
               <HighlightCards>
                    <HighlightCard  type="up" title="Entradas" amount="R$ 16.400,00" lastTransaction=" 04 de abril de 2022"/>
                    <HighlightCard  type="down" title="Saidas" amount="R$ 2.300,00" lastTransaction=" 18 de abril de 2022"/>
                    <HighlightCard  type="total" title="Total" amount="R$ 78.200,00" lastTransaction=" 05 de abril de 2022"/>
                    
               </HighlightCards>
            </Container>
    )
}
