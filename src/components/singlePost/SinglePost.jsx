import "./singlePost.css"

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img src="https://s2.glbimg.com/bgGxMP11Fdox4A7RVFLRZSLkeyo=/0x0:2048x1314/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/B/4/CpdjQ4SZANm1zQK9rIBw/pordosol.jpg" alt="" className="singlePostImg" />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          <div className="singlePostEdit">
          <i className="singlePostIcon fa-solid fa-user-pen"></i>
          <i className="singlePostIcon fa-solid fa-trash-arrow-up"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">Author: <b>Silvio Cesar</b></span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
          Beatae, sit! Doloremque voluptas similique, expedita 
          consequuntur aspernatur dolorem illo cumque, veritatis nobis 
          odio perspiciatis aperiam, hic dignissimos voluptates rem et id?
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
          Beatae, sit! Doloremque voluptas similique, expedita 
          consequuntur aspernatur dolorem illo cumque, veritatis nobis 
          odio perspiciatis aperiam, hic dignissimos voluptates rem et id?
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
          Beatae, sit! Doloremque voluptas similique, expedita 
          consequuntur aspernatur dolorem illo cumque, veritatis nobis 
          odio perspiciatis aperiam, hic dignissimos voluptates rem et id?
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
          Beatae, sit! Doloremque voluptas similique, expedita 
          consequuntur aspernatur dolorem illo cumque, veritatis nobis 
          odio perspiciatis aperiam, hic dignissimos voluptates rem et id?
        </p>
      </div>
    </div>
  )
}
