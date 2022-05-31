import "./post.css"

export default function Post() {
  return (
    <div className="post">
        <img className="postImg" src="https://images-na.ssl-images-amazon.com/images/I/81d2waAXQTL.jpg" 
        alt=""/>
    <div className="postInfo">
        <div className="postCats">
            <span className="postCat">Music</span>
            <span className="postCat">Life</span>
        </div>
        <span className="postTitle">
            Lorem ipsum dolor sit amet 
        </span>
        <hr/>
        <span className="postDate">1 hour ago</span>
    </div>
    <p className="postDesc">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
        Magnam odit quidem reiciendis blanditiis suscipit, fuga 
        tempora praesentium, totam molestiae incidunt earum harum 
        consectetur placeat cupiditate neque, a id quia minima?
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
        Magnam odit quidem reiciendis blanditiis suscipit, fuga 
        tempora praesentium, totam molestiae incidunt earum harum 
        consectetur placeat cupiditate neque, a id quia minima?
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
        Magnam odit quidem reiciendis blanditiis suscipit, fuga 
        tempora praesentium, totam molestiae incidunt earum harum 
        consectetur placeat cupiditate neque, a id quia minima?
    </p>
    </div>
  )
}
