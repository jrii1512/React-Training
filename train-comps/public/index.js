


import { ReactDOM } from 'react-dom'

import Header from "../src/Header"
import Main from "./Main"
import Footer from "./Footer"

function Page() {
    return (
        <div>
            <Header />
            <Main />
            <Footer />
        </div>
    )
}


ReactDOM.render(<Page />, document.getElementById("root"))




