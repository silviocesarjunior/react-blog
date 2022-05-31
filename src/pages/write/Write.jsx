import "./write.css"

export default function Write() {
  return (
    <div className="write">
        <img className="writeImg" 
        src="https://mobimg.b-cdn.net/v3/fetch/cb/cb4585baf3f5acdf4bd1ea55f3d3f629.jpeg" 
        alt="" />
        <form className="writeForm">
            <div className="writeFormGroup">
                <label htmlFor="">
                <i className="writeIcon fa-solid fa-circle-plus"></i>
                </label>
                <input type="file" id="fileInput" style={{display:"none"}} />
                <input type="text" placeholder="Title" className="writeInput" autoFocus={true} />
            </div>
            <div className="writeFormGroup">
                <textarea placeholder="Tell your story..."
                type="text"
                className="writeInput writeText">
                </textarea>
            </div>
            <button className="writeSubmit">Publish</button>
        </form>
    </div>
  )
}
