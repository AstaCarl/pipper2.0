import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Sidebar(props) {
    return (
        <body>  
            <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">Enable both scrolling & backdrop
            </button>

            <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">   
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Backdrop with scrolling  
                    </h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close">               
                    </button>
                </div>
                <div className="offcanvas-body">
                    <nav class="nav flex-column">
                        <a class="nav-link active" aria-current="page" href="#">Active</a>
                        <a class="nav-link" href="#">Link</a>
                        <a class="nav-link" href="#">Link</a>
                    </nav>
                </div>
            </div>
        </body>
    )
}
