//const Url = 'http://localhost:8080/Api'

const APIUrl = 'http://hrm.unibillapp.com:8080/Api'

const getToken = () => {
    var userData = localStorage.getItem("token");

    const t = JSON.parse(userData);
    const config = {
        headers: { Authorization: `Bearer ${t.data.Token}` }
    };

    return config;
}
export { APIUrl, getToken } 