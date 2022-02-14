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
                    <HighlightCard />
                    <HighlightCard />
                    <HighlightCard />
               </HighlightCards>
            </Container>
    )
}
