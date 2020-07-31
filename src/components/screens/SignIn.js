import React,{useState,useContext,} from 'react'
import {Link,useHistory} from 'react-router-dom'
import {UserContext} from '../../App'
import M from 'materialize-css'
const SignIn  = ()=>{
    const {state,dispatch} = useContext(UserContext)
    const history = useHistory()
    const [password,setPasword] = useState("")
    const [email,setEmail] = useState("")

    const PostData = ()=>{
        
        fetch("/signin",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                password,
                email
            })
        }).then(res=>res.json())
        .then(data=>{
            console.log(data)
           if(data.error){
              M.toast({html: data.error,classes:"#c62828 red darken-3"})
           }
           else{
               localStorage.setItem("jwt",data.token)
               localStorage.setItem("user",JSON.stringify(data.user))
               dispatch({type:"USER",payload:data.user})
               M.toast({html:"signedin success",classes:"#43a047 green darken-1"})
               history.push('/MainMenu')
           }
        }).catch(err=>{
            console.log(err)
        })
    }

const PythonFunc = ()=>{


	



    }

   return (
      <div className="mycard">
          <div className="card auth-card input-field">
            <h2>DIGITAL HEALTHCARE</h2>
            <input
            type="text"
            placeholder="IDENTIFICATION"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            />
            <input
            type="password"
            placeholder="PASSWORD"
            value={password}
            onChange={(e)=>setPasword(e.target.value)}
            />
            <button className="btn waves-effect waves-light #64b5f6 blue darken-1"
            onClick={()=>PostData()}
            >
                Login
            </button>

	    <button className="btn waves-effect waves-light #64b5f6 blue darken-1"
            onClick="pageRedirect()"
            >
                authenticate
            </button>

        </div>
      </div>
   )
}


export default SignIn


/*
            <h5>
                <Link to="/signup">Dont have an account ?</Link>
            </h5>
*/	
