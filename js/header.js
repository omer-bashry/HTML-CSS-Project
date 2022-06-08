let Headerpage = document.querySelector("header");

Headerpage.innerHTML =
 ` 
  <div class="nav-feixed-scrolling"> 
  <nav class=" navbar navbar-expand-lg text-body ">
		  <a class="navbar-brand  bg-Dark" href="index.html"><img class="logo" src="images/logo.png"></a>
		      <img class="closemnue" src="images/close.png">
		      <div class="openmnue">
		     	<span></span>
		  	    <span class="min-width"></span>
		        <span></span>
		      </div>
	  <div class="collapse navbar-collapse">
			  <ul class="navbar-nav ">
			      <li class="active nav-item nav-link home ">
			        Home
			      </li>
			      <li class="nav-item nav-link">
			       <a href="#Men"> Men's</a>
			          
			      </li>
			       <li class="nav-item nav-link">
			        <a href="#Women"> Women's</a>
			           
			      </li>
			       <li class="nav-item nav-link">
			       <a href="#kids"> Kid's</a>
			          
			      </li>
			      <li class="nav-item nav-link dropdown openPagedrop">
				     <div class=" dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle=" dropdown" aria-expanded="false">
                            Pages
				      </div>
				        
			      </li>

			      <li class="nav-item nav-link dropdown openfeaturesdrop">
				        <div class=" dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
				        Features
				        </div>
			      </li>
			      <li class="nav-item nav-link" >
			        <a href="#explore">  Explore  </a>
			      </li>
			  </ul>
		 </div>
		</nav>
		  <div class="drop-page">
			   	<ul>
			 		<li class="about">About Us</li>
					<li class="product">Products</li>
	          		<li class="detailse">Single Product</li>
					<li class="contact">Contact Us</li>
			    </ul>
          </div>
          <div class="drop-Features">
			   	<ul>
			 		<li>Features Page 1</li>
					<li>Features Page 2</li>
	          		<li>Features Page 3</li>
					<li>Template Page 4</li>
			    </ul>
          </div>
          <div class="navsmall">
          	    <ul class="small">
			     
			    </ul>
          </div>
     </div>
`;