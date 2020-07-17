import React from 'react'
import { Route } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

export default function Routes({ routes }) {
    return (
        <div>
            {
                routes.map(({path, Component}) => (
                    <Route key={path} exact path={ path }>  
                        {({ match }) => (
                            <CSSTransition
                                in={match !== null}
                                timeout={300}
                                classNames="page"
                                mountOnEnter
                                unmountOnExit
                            >
                                <div className="page">
                                    <Component />
                                </div>
                            </CSSTransition>
                        )}
                    </Route>
                ))
            }
        </div>
    )
}
