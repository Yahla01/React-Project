import React from "react";

class FooterState extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            age: 0
        }
    }

    render() {
        return(
            <div className="container">
                <label htmlFor="firstName">
                  FirstName:  <input type="text" name="firstName" id="firstName"/>
                </label>  <br/><br/>
                <label htmlFor="lastName">
                  LastName:  <input type="text" name="lastName" id="lastName"/>
                </label> <br/><br/>
                <label htmlFor="age">
                    Age:  <input type="text" name="age" id="age"/>
                </label> <br/><br/>
                <p className="fName">This is my firstName: {this.state.firstName} </p>
                <p>This is my lastName: {this.state.lastName}</p>
                <p>My age is: {this.state.age}</p>
            </div>
        ) 

    }
}
export default FooterState

