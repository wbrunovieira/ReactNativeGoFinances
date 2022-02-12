import React from 'react';


import { 
    Container ,
    Header,
    UserInfo,
    UserWrapper,
    Photo,
    User,
    UserGreeting,
    UserName
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
                 </UserWrapper>
               </Header>
            </Container>
    )
}
