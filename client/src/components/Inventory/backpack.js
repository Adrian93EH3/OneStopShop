import React from 'react';
const backpack = require ('./backpack.json'); 

class Backpack extends React.Component {
    render() {
        return (
            <div>
                    <h1 className="backpack">Backpack</h1>
                    <div className="parent">
                        {backpack.backpack.map((item, key) => {
                            return (
                                <article className="child">
                                    <img className="images" src={`../images/${item.image}`}/>
                                    <h3>{item.name}</h3>
                                    <p>{item.description}</p>
                                    <h5>{item.price}</h5>
                                </article>
                            )})}
                    </div>
            </div>
        )
    }
}

export default Backpack;