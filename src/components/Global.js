import React, { Component } from 'react';
import { FormGroup, Form, Input, Button, InputGroup, InputGroupAddon } from 'reactstrap';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Gallery from './Gallery';

class Global extends Component {

    state = { query: '', items: [] };

    searchbook() {
       const BASE_URL = 'https://www.googleapis.com/books/v1/volumes?q=';
       fetch(`${BASE_URL}${this.state.query}`, { method: 'GET'})
       .then(response => response.json())
       .then(json => {
           let { items } = json;
           this.setState({items})
       });
       
    }
  
   render() {
       return (
           <div className="Global">
               <h2>Book Explorer!</h2>
                <Form>
                  <FormGroup>  
                      <InputGroup>  
                        <Input 
                            type="text" 
                            placeholder="Search for a book"
                            onChange={event => this.setState({query: event.target.value})}
                            onKeyPress={event => {
                                if (event.key === 'Enter') {
                                    event.preventDefault();
                                    this.searchbook();
                                    
                                }
                            }}
                        />
                        <InputGroupAddon addonType="append">              
                        <Button color="primary" size="md" onClick={() => this.searchbook()}>
                                 <FontAwesomeIcon icon={faSearch}/>
                        </Button>
                        </InputGroupAddon>
                    </InputGroup>
                  </FormGroup>
                 </Form>
                 <Gallery items={this.state.items}/>
                                     
                  
           </div>
       )
   }
}

export default Global;