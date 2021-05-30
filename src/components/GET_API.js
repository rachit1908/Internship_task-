import React from 'react';

class GET extends React.Component {

    constructor() {
      super();
      this.state = {
        user: null
      }
    }
    componentDidMount() {
      fetch('https://reqres.in/api/users?page=1').then((resp) => {
        resp.json().then((result) => {
         // console.warn(result)
          this.setState({users:result.data})
        })
  
      })
    }
    render() {
      return (
          
        <div className="GET">
          <h1>
            Fetch API data
          </h1>
         {
            this.state.users ?
            this.state.users.map((item,i)=>
            <div><p>{i}---{item.first_name}
                           {item.last_name}
                           {item.email}</p></div>)
            :
             null
                          
         }
        </div>
      );
    }
  }
  export default GET;