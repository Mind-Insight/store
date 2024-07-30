export default function Cart() {
    return (
        <>
            <div class="container">
                <div class="navbar">
                    <div class="logo">
                        <a href="http://localhost:5173/"><img src="../images/logo.png" alt="" width="125px"></img></a>
                    </div>
                    <nav>
                        <ul id="MenuItems">
                            <li><a href="http://localhost:5173/">Home</a></li>
                            <li><a href="http://localhost:5173/products/">Products</a></li>
                            <li><a href="">About</a></li>
                            <li><a href="">Contact</a></li>
                            <li><a href="account.html">Account</a></li>
                        </ul>
                    </nav>
                    <a href="http://localhost:5173/cart/"><img src="../images/cart.png" width="30px" height="30px"></img></a>
                    <img src="../images/menu.png" class="menu-icon"></img>
                </div>
            </div>

            <div class="small-container cart-page">
                <table>
                    <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                    </tr>
                    <tr>
                        <td>
                            <div class="cart-info">
                                <img src="../images/buy-1.jpg"></img>
                                <div>
                                    <p>Red Printed T-shirt</p>
                                    <small>Price: $50.00</small>
                                    <a href="">Remove</a>
                                </div>
                            </div>
                        </td>
                        <td><input type="number" value="1"></input></td>
                        <td>$50.00</td>
                    </tr>
                    <tr>
                        <td>
                            <div class="cart-info">
                                <img src="../images/buy-2.jpg"></img>
                                <div>
                                    <p>Red Printed T-shirt</p>
                                    <small>Price: $50.00</small>
                                    <a href="">Remove</a>
                                </div>
                            </div>
                        </td>
                        <td><input type="number" value="1"></input></td>
                        <td>$50.00</td>
                    </tr>
                    <tr>
                        <td>
                            <div class="cart-info">
                                <img src="../images/buy-3.jpg"></img>
                                <div>
                                    <p>Red Printed T-shirt</p>
                                    <small>Price: $50.00</small>
                                    <a href="">Remove</a>
                                </div>
                            </div>
                        </td>
                        <td><input type="number" value="1"></input></td>
                        <td>$50.00</td>
                    </tr>
                </table>

                <div class="total-price">
                    <table>
                        <tr>
                            <td>Subtotal</td>
                            <td>$200.00</td>
                        </tr>
                        <tr>
                            <td>Tax</td>
                            <td>$30.00</td>
                        </tr>
                        <tr>
                            <td>Total</td>
                            <td>$230.00</td>
                        </tr>
                    </table>
                </div>
            </div>

            <div class="footer">
                <div class="container">
                    <div class="row">
                        <div class="footer-col-1">
                            <h3>Download Our App</h3>
                            <p>Download App for Android and ios mobile phone.</p>
                            <div class="app-logo">
                                <img src="../images/play-store.png"></img>
                                <img src="../images/app-store.png"></img>
                            </div>
                        </div>
                        <div class="footer-col-2">
                            <img src="../images/logo-white.png"></img>
                            <p>Our Purpose Is To Sustainably Make the Plesure and
                                Benefits of Sports Accessible to the Many.
                            </p>
                        </div>
                        <div class="footer-col-3">
                            <h3>Useful Links</h3>
                            <ul>
                                <li>Coupons</li>
                                <li>Blog Post</li>
                                <li>Return Policy</li>
                                <li>Join Affiliate</li>
                            </ul>
                        </div>
                        <div class="footer-col-4">
                            <h3>Follow us</h3>
                            <ul>
                                <li>Facebook</li>
                                <li>Twitter</li>
                                <li>Instagram</li>
                                <li>YouTube</li>
                            </ul>
                        </div>
                    </div>
                    <hr></hr>
                    <p class="copyright">Copyright 2024 - My Creativity</p>
                </div>
            </div>
        </>
    )
}