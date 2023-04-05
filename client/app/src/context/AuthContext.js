import { createContext,useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { authServiceFac } from '../services/authService';
import { ErrorContext } from './ErrorContext'

export const AuthContext =createContext();

export const AuthProvider =({children})=>{
    const { error, setError, closeError } = useContext(ErrorContext);
    const [auth, setAuth]=useState({});
    const navigate=useNavigate();

    const authService=authServiceFac(auth.accessToken);

    const onLoginSubmit =async(data)=>{
        try{
        const result = await authService.login(data)
        console.log(result);
        setAuth(result)
        
        navigate('/')
        }catch(error){
          setError('Failed to log in. Please check your email and password.');
        }
      };

      const onRegisterSubmit = async (values) => {
        const { confirmPassword, ...data } = values;
        if (confirmPassword !== data.password) {
          setError('Password dont match!')
            return;
        }
    
        try {
            const result = await authService.register(data);
            setAuth(result);
            navigate('/');
        } catch (error) {
          setError('Failed to register. Please try again.');
        }
    };

    
const onLogout = async () => {
    try {
      await authService.logout();
      setAuth({});
    } catch (error) {
      setError('Failed to log out.Please try again!')
  
    }
  
  };
  const contextValue={
    onLoginSubmit,
    onRegisterSubmit,
    onLogout,
    userId: auth._id,
    token:auth.accessToken,
    username:auth.username,
    bio:auth.bio,
    image:auth.imageUrl,
    email:auth.email,
    isAuthenticated: !!auth.accessToken,
  };
  return(
    <>
    <AuthContext.Provider value={contextValue}>
        {children}
    </AuthContext.Provider>
    </>
  );
};
// export const useAuthContext = () => {
//     const context = useContext(AuthContext);

//     return context;
// };
