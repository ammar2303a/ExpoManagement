import React from 'react'

function Footer() {
  return (
    <div>

<footer className="footer py-5 theme-bg-primary">
		<div className="container text-center">
			
			<ul className="social-list list-inline mb-4"> 
				<li className="list-inline-item me-3"><a href="#"><i className="fas fa-envelope"></i></a></li>
				<li className="list-inline-item me-3"><a href="#"><i className="fa-brands fa-x-twitter fa-fw"></i></a></li>
				<li className="list-inline-item me-3"><a href="#"><i className="fa-brands fa-instagram fa-fw"></i></a></li>
				<li className="list-inline-item me-0"><a href="#"><i className="fa-brands fa-youtube fa-fw"></i></a></li>
			</ul>
			
			
			<ul className="footer-links list-inline mx-auto mb-4">
				<li className="list-inline-item"><a href="#">Code of Conduct</a></li>
				<li className="list-inline-item">|</li>
				<li className="list-inline-item"><a href="#">Terms</a></li>
				<li className="list-inline-item">|</li>
				<li className="list-inline-item me-0"><a href="#">Privacy</a></li>
			</ul>
			
			 
			<small className="copyright">Designed with <i className="fas fa-heart" style={{color: "#EC645E"}}></i> by <a href="http://themes.3rdwavemedia.com" target="_blank">Xiaoying Riley</a> for developers</small>
			
		</div>    
	</footer>

	
	<div className="modal modal-speaker modal-speaker-1" id="modal-speaker-1" tabIndex="-1" role="dialog" aria-labelledby="speaker-1-ModalLabel" aria-hidden="true">
		<div className="modal-dialog">
			<div className="modal-content">
				<div className="modal-header">
					<button type="button" className="btn-close" data-bs-dismiss="modal" aria-hidden="true">&times;</button>
					<h4 id="speaker-1-ModalLabel" className="modal-title sr-only"
>Speaker Name</h4>
				</div>
				<div className="modal-body p-0">
					<div className="theme-bg-light p-5">
						<div className="row">
							<div className="col-12 col-md-auto text-center">
							    <img className="profile-image mb-3 mb-md-0 me-md-4 rounded-circle mx-auto" src="assets/images/speakers/speaker-1.jpg" alt="" />
							</div>
							
							<div className="col text-center text-md-start mx-auto">
								<h2 className="name mb-2">Speaker Name</h2>
								<div className="meta">Job Title Or Position</div>
								<div className="meta mb-2">Company Or Organization</div>
								<ul className="social-list list-inline mb-0">								
									<li className="list-inline-item"><a  href="#"><i className="fa-brands fa-x-twitter fa-fw"></i></a></li>
									<li className="list-inline-item"><a  href="#"><i className="fa-brands fa-linkedin-in fa-fw"></i></a></li>
									<li className="list-inline-item"><a  href="#"><i className="fa-brands fa-github fa-fw"></i></a></li>
								</ul>
							</div>
						</div>
					</div>
					<div className="desc p-4 p-lg-5">
						<p>You can put speaker's bio or talk related info here. Duis a mi quis metus porttitor eleifend. Pellentesque finibus ultrices imperdiet. Maecenas auctor tortor quis risus tincidunt, mattis mattis leo placerat. Fusce metus augue, sagittis eget enim vel, venenatis auctor est. In interdum felis massa, ac porta nunc pretium non. In fringilla orci vitae imperdiet malesuada. Vestibulum feugiat lobortis est, in sagittis nisi molestie vel. Mauris ultrices vitae lectus eu feugiat. Fusce semper, nisi at placerat mollis, augue elit pretium enim, eu pellentesque justo purus et lectus. </p>
						<p className="mb-0">Donec neque magna, molestie vel varius ut, pretium a urna. Pellentesque placerat nunc eu condimentum pellentesque. Vivamus dictum nisl leo, id fermentum lectus porttitor et. Pellentesque tristique erat libero, condimentum porttitor nisl pharetra et.</p>
					</div>
				</div>
			</div>
		</div>
	</div>

    </div>
  )
}

export default Footer
