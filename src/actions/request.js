import axios from 'axios'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
const request = ({
    url,
    header,
    method = 'GET',
    params,
    data
}) => {
    return new Promise( (resolve , reject) => {
        switch(method.toUpperCase()) {
            case 'GET':
                axios({
                    url,
                    params
                }).then( res => resolve( res ) )
                .catch( err => reject( err ) )
                break;
            case "POST":
                axios({
                    url,
                    data
                }).then( res => resolve( res ) )
                .catch( err => reject(err) )
                break;
            default:
                break;
        }
    })
}

export default request;