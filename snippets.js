
const bungas = {
"async-function": 
`
await functionName(parameter);

async functionName(parameter) {
    return new Promise(async function (resolve, reject) {
        if(parameter){
            resolve();
        } else {
            reject();
        }
    })
}
`,
"api-get":
`
export function getAPI(parameter) {
    return function (dispatch) {
        let url = '/api/name/' + parameter;
        axios.get(url)
            .then(function (response) {
                if (response.data.status == "success"){
                    // Successful actions
                } else if (response.data.status == "error"){
                    // Error actions
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}
`,
"api-post":
`
export function postAPI(data) {
    return function (dispatch) {
        axios.post('/api/name', data)
            .then(function (response) {
                if (response.data.status == "success"){
                    // Success actions
                } else if (response.data.status == "error"){
                    // Error actions
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}
`,
    "react-component":
        `
import React from "react"
class MyComponent extends React.Component {
    constructor(props) {
    super(props);
 this.state = {};
}
  render() {
    return <div></div>
  }

}`
}

module.exports = bungas
