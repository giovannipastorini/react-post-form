export default function AppForm (){

    return(
        <form>
            <div className="container my-5"> 
                    <div className="mb-3">
                        <label className="form-label">Author:</label>
                        <input className="form-control" type="text" placeholder="Input the author" aria-label="default input example" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Title:</label>
                        <input className="form-control" type="text" placeholder="Input the title" aria-label="default input example" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Body of the post:</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="2" placeholder="Input the body"></textarea>
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Public</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
            </div>
        </form>
    )
}