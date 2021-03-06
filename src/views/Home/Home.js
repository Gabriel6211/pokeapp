import React, {Component, Fragment} from 'react';

import Card from '../../components/Card/Card'
import Input from '../../components/Input/Input'

import { MdSearch } from 'react-icons/md'

import './home.scss'

class Home extends Component {

    state = {
        searchInput: ''
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }


    //<button className="search-button" onClick={this.handleSearch}><MdSearch/></button>
    render() {
        return <div className="container">
            <Card className="home-card">
                <div className="search-section">
                    <Input text="Buscar pokemon..." handleChange={this.handleChange}/>
                </div>
            </Card>
        </div>
        
      
    }
}


export default Home;