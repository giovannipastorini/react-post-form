import { useState } from "react";

export default function AppForm ({posts, setPosts}){

    const [postObj, setPostObj]=useState({
        id: undefined,
        author: "",
        title: "",
        body: "",
        public: true
    })

    function handleFormData (event){
        event.preventDefault();	
        console.log("il form è stato inviato");

        setPostObj({
            ...postObj,
            [event.target.name]:[event.target.value]
        })
        console.log(postObj);
        

        setPosts(...posts, postObj)
        
    }

    return(
        <form onSubmit={handleFormData}>
            <div className="container my-5"> 
                    <div className="mb-3">
                        <label className="form-label">Author:</label>
                        <input className="form-control" 
                                type="text" 
                                placeholder="Input the author" 
                                aria-label="default input example"
                                value={postObj.author}
                                name="author"
                                onChange={handleFormData} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Title:</label>
                        <input className="form-control"
                                 type="text" 
                                 placeholder="Input the title" 
                                 aria-label="default input example"
                                 value={postObj.title}
                                 name="title"
                                 onChange={handleFormData} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Body of the post:</label>
                        <textarea className="form-control"
                                  id="exampleFormControlTextarea1"
                                  rows="2" 
                                  placeholder="Input the body"
                                  value={postObj.body}
                                  name="body"
                                  onChange={handleFormData}>
                            
                        </textarea>
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox"
                                 className="form-check-input"
                                 id="exampleCheck1"
                                 value={postObj.public}
                                 name="public"
                                 onChange={handleFormData}/>
                        <label className="form-check-label" htmlFor="exampleCheck1">Public</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
            </div>
        </form>
    )
}