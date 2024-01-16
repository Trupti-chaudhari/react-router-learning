import "./header.scss"
import flipcart from "../../images/flipcart.svg"

function Header() {
    return <>
        <div className="header">
            <div className="tools">
                <div>
                    <img src={flipcart} alt="" />
                    <input type="text" placeholder="Search for Products,Brands and More" />
                </div>

                <div className="btn">
                    <button>Login</button>
                    <button>Cart</button>
                </div>
            </div>

        </div>
    </>

}

export default Header;