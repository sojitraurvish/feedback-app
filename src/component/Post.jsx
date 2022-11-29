import {useParams,Navigate,useNavigate,Route,Routes} from "react-router-dom";

const Post=()=>{
    const params=useParams();
    const status=202;
    // const status=404;
    const navigate=useNavigate();

    if(status === 404){
       return <Navigate to="/notfound" />
    }

   
    const onClick=()=>{
        console.log("After printing something then i want to redirect");
        navigate("/about");
    }
    return (
        <div>
            <h1>Post {params.id} and name {params.name}</h1>
            <button onClick={onClick}>Click</button>
            <Routes>
                <Route path="/shop" element={<h1>Hello wold</h1>}/>
            </Routes>
        </div>
    );
}

export default Post;