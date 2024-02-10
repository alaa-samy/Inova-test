import { Link } from "react-router-dom"


export const Navbar = () => {

    return (
        <nav className="items-center shadow-lg flex justify-between px-4 py-2 bg-dark border-b-2 border-white">
            <div>
                <Link to='/'>
                    <img
                        className="h-10"
                        src="http://bigramyweb.inovaeg.com/static/media/main-logo.d37fd44b1dd3dfb263bfdd977c7cef90.svg"
                        alt="Gazi Adib"
                    />
                </Link>
            </div>

            <div className='items-center text-center mx-auto my-2 text-3xl text-white font-semibold'>
                Big Ramy
            </div>
        </nav>
    );
}
