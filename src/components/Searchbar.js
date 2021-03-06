import React from 'react';

class Searchbar extends React.Component {

    state = {term : ''};  // control events
    // onInputChange(event){
    //     console.log(event.target.value);    // uncontrol events
    // }

    onFormSubmit= (evnt) => {                       
        evnt.preventDefault();
        //console.log(this.state.term);
        this.props.onSubmit(this.state.term);
    }

    render(){
        return (
            <div className="ui segment" >
                <form onSubmit={this.onFormSubmit} className="ui form" >
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text" placeholder="Search Any Images you want to" value={this.state.term} onChange={(e) => this.setState({term : e.target.value})}/>
                    </div>
                </form>
            </div>
        );
    };
}

export default Searchbar;
