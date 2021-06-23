import React from 'react'
import {Wrapper} from "./ui/index";
import ColumnsContainer from 'components/Columns/ColumnsContainer';
import AuthContainer from "components/Auth/AuthContainer";

function App() {
    return (
        <Wrapper>
            <AuthContainer/>
            <h1>TrelloCopy</h1>
            <ColumnsContainer/>
        </Wrapper>
    )
}

export default App;
