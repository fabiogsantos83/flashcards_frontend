import VueJwtDecode from "vue-jwt-decode";

function getUserLogin(){
    const token = localStorage.getItem("token");
    
    if (!token){
        return null;
    }

    var tokenDecode = VueJwtDecode.decode(token);
    
    const userLogin = {
      email: tokenDecode.email,
      name: tokenDecode.unique_name,
      id: tokenDecode.nameid,
      token: token
    };

    console.log(userLogin)

    return userLogin
    
}


export default getUserLogin;
