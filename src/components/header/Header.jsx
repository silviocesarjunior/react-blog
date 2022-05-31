import "./header.css"

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img className="headerImg" src="https://images-na.ssl-images-amazon.com/images/I/91n7pTKoUUL.jpg" alt="" />
    </div>
  );
}
