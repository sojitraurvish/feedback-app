import React from "react";

function App(){
    const title="Blog Post"
    const body="This is my blog post"
    const comments=[
        {id:1,text:"Comment one"},
        {id:2,text:"Comment two"},
        {id:3,text:"Comment three"},
    ]

    return (
       <div className="container">
            <h1>{title.toLocaleUpperCase()}</h1>
            <p>{body}</p>
            {5+5}
            <div>
                <h3>Comments {comments.length}</h3>
                <ul>
                    {
                        comments.map((comment,index)=>(
                            <li key={index}>{comment.text}</li>
                        ))
                    }
                </ul>
            </div>
       </div> 
    );
}

export default App;

// with jsx syntax
// (
//     //our every component want at list one parent level component so you can use div but it is block element but if you don't want block element so use can use <Fragment> or <> and it represent nothing 
//     <Fragment>
//         <h1 className="container">My App</h1>
//         <label htmlFor="forattribute">my label</label>
//         <p>Hello</p>

//     </Fragment>

// )

// without jsx syntxt
// import React from "react";

// function App(){
//     return React.createElement("div",{className:"container"},
//         React.createElement("h1",{},"Myapp")
//     )
// }

// export default App;