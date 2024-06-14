import LogoImage from "../../assets/image/logo.jpg"
import Headline from "../../assets/image/headline.jpeg"
export default function About(){
    return (
       <div>
         <nav className="px-4 py-4 flex justify-between sticky">
            <div>
                <a href="/"><img src={LogoImage} alt="" /></a>
            </div>
            <div>
                <ul className="flex gap-10">
                    <li className="px-3 py-2"><a href="/">Home</a></li>
                    <li className="px-3 py-2"><a href="/">About Us</a></li>
                    <li className="px-3 py-2"><a href="/">Product</a></li>
                    <li className="px-3 py-2"><a href="/">Services</a></li>
                    <li className="px-3 py-2"><a href="/">FAQ</a></li>
                    <li className="px-3 py-2"><a href="/">Blogs</a></li>
                    <button className="px-3 py-2 text-center bg-blue-700 text-white rounded">Download App</button>
                </ul>
            </div>
        </nav>
        <header>
                <img src={Headline} alt="Books"/>
                <h3><a href="/">Home</a></h3>
                /   
                <h3><a href="/">About Us</a></h3>
        </header>
        <main>
            <section>
                <div>






                    
                </div>
                </section>
        </main>
    
       </div>
    )
}