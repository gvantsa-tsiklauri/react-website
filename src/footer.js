import React from "react";
import './index.css';

class Footer extends React.Component {
    render() {
        return (
            <>
                <div className="container-fluid px-5 py-3 d-flex justify-content-between dave">
                    <div>
                        <span className="fs-5">Gvantsa Tsiklauri</span>
                    </div>
                    <div>
                        <span className="fs-6">© Copyright</span>
                    </div>
                </div>
            </>
        )
    }
}

export default Footer