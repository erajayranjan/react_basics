import React from "react"
import ReactDOM from "react-dom"
import "../style.css";


export default function About(){
  return (
  
	<div>


			<div id="wrapper">


					<header id="header">
						<span className="avatar"><img src="images/avatar.jpg" alt="" /></span>
						<h1>This is <strong>Visualize</strong>, a responsive site template designed by <a href="http://templated.co">TEMPLATED</a><br />
						and released for free under the Creative Commons License.</h1>
						<ul className="icons">
							<li><a href="#" className="icon style2 fa-twitter"><span className="label">Twitter</span></a></li>
							<li><a href="#" className="icon style2 fa-facebook"><span className="label">Facebook</span></a></li>
							<li><a href="#" className="icon style2 fa-instagram"><span className="label">Instagram</span></a></li>
							<li><a href="#" className="icon style2 fa-500px"><span className="label">500px</span></a></li>
							<li><a href="#" className="icon style2 fa-envelope-o"><span className="label">Email</span></a></li>
						</ul>
					</header>

				 
					<section id="main">


							<section className="thumbnails">
								<div>
									<a href="images/fulls/01.jpg">
										<img src="images/thumbs/01.jpg" alt="" />
										<h3>Lorem ipsum dolor sit amet</h3>
									</a>
									<a href="images/fulls/02.jpg">
										<img src="images/thumbs/02.jpg" alt="" />
										<h3>Lorem ipsum dolor sit amet</h3>
									</a>
								</div>
								<div>
									<a href="images/fulls/03.jpg">
										<img src="images/thumbs/03.jpg" alt="" />
										<h3>Lorem ipsum dolor sit amet</h3>
									</a>
									<a href="images/fulls/04.jpg">
										<img src="images/thumbs/04.jpg" alt="" />
										<h3>Lorem ipsum dolor sit amet</h3>
									</a>
									<a href="images/fulls/05.jpg">
										<img src="images/thumbs/05.jpg" alt="" />
										<h3>Lorem ipsum dolor sit amet</h3>
									</a>
								</div>
								<div>
									<a href="images/fulls/06.jpg">
										<img src="images/thumbs/06.jpg" alt="" />
										<h3>Lorem ipsum dolor sit amet</h3>
									</a>
									<a href="images/fulls/07.jpg">
										<img src="images/thumbs/07.jpg" alt="" />
										<h3>Lorem ipsum dolor sit amet</h3>
									</a>
								</div>
							</section>

					</section>


					<footer id="footer">
						<p>&copy; Untitled. All rights reserved. Design: <a href="http://templated.co">TEMPLATED</a>. Demo Images: <a href="http://unsplash.com">Unsplash</a>.</p>
					</footer>

			</div>

			<script src="assets/js/jquery.min.js"></script>
			<script src="assets/js/jquery.poptrox.min.js"></script>
			<script src="assets/js/skel.min.js"></script>
			<script src="assets/js/main.js"></script>

	</div>

  )
}

