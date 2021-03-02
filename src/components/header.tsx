import * as React from 'react';
import { Header, Div, P, Navibar, GlobalStyle, H1, Button } from './styles';

export default function Headerclass() {
    return (
        <div>
            <GlobalStyle />
            <Header>
                <Div><H1>Logo</H1></Div>
                <Div>
                  <Navibar><P>Home</P></Navibar>
                  <Navibar><P>Contact</P></Navibar>
                  <Navibar><Button><strong>Navigation</strong></Button></Navibar>
                </Div>
            </Header>
        </div>
    )
}