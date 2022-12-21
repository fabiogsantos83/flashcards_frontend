import { useRouter } from "vue-router";

function validateLogin() {
  
  const router = useRouter();
  const token = localStorage.getItem("token");

  if (!token) {
    router.push('login')
    return false;
  }

  return true;
}

export default validateLogin;
