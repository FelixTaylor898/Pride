class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
      <!-- Navigation !-->
      <section aria-label="Navigation links">
          <div class="mobile rainbow-shadow">
              <nav class="navbar navbar-dark bg-dark">
                  <div class="container-fluid">
                      <a class="navbar-brand" href="index.html">Home</a>
                      <button class="navbar-toggler ml-auto" type="button" data-toggle="collapse"
                          data-target="#collapsingNavbar3Home">
                          <span class="navbar-toggler-icon"></span>
                      </button>
                      <div class="navbar-collapse collapse" id="collapsingNavbar3Home">
                          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                              <li class="nav-item"><a class="nav-link" href="vendors.html">Vendors</a></li>
                              <li class="nav-item"><a class="nav-link" href="sponsor.html">Sponsor</a></li>
                              <li class="nav-item"><a class="nav-link" href="donate.html">Donate</a></li>
                              <li class="nav-item"><a class="nav-link" href="volunteer.html">Volunteer</a></li>
                              <li class="nav-item"><a class="nav-link" href="about.html">About</a></li>
                              <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
                          </ul>
                          <ul class="navbar-nav d-flex flex-row me-1">
                              <li class="nav-item me-3 me-lg-0">
                                  <a title="Shop & Donate" class="nav-link"
                                      href="https://shenandoahvalleypride-108313.square.site/" target="_blank"><i
                                          class="fa-solid fa-cart-shopping"></i></a>
                              </li>
                              <li class="nav-item me-3 me-lg-0">
                                  <a title="Facebook" class="nav-link"
                                      href="https://www.facebook.com/shenandoahvalleypride/" target="_blank"><i
                                          class="fa-brands fa-facebook"></i></a>
                              </li>
                          </ul>
                      </div>
                  </div>
              </nav>
          </div>
  
          <div class="header">
              <div class="rainbow-shadow">
                  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                      <div class="container-fluid">
                          <a class="navbar-brand" href="index.html">Home</a>
                          <div class="collapse navbar-collapse">
                              <ul class="navbar-nav me-auto mb-2 mb-lg-0 nav-fill w-100">
                                  <li class="nav-item"><a class="nav-link" href="vendors.html">Vendors</a></li>
                                  <li class="nav-item"><a class="nav-link" href="sponsor.html">Sponsor</a></li>
                                  <li class="nav-item"><a class="nav-link" href="donate.html">Donate</a></li>
                                  <li class="nav-item"><a class="nav-link" href="volunteer.html">Volunteer</a></li>
                                  <li class="nav-item"><a class="nav-link" href="about.html">About</a></li>
                                  <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
                              </ul>
                              <ul class="navbar-nav d-flex flex-row me-1">
                                  <li class="nav-item me-3 me-lg-0">
                                      <a title="Shop & Donate" class="nav-link"
                                          href="https://shenandoahvalleypride-108313.square.site/" target="_blank"><i
                                              class="fa-solid fa-cart-shopping"></i></a>
                                  </li>
                                  <li class="nav-item me-3 me-lg-0">
                                      <a title="Facebook" class="nav-link"
                                          href="https://www.facebook.com/shenandoahvalleypride/" target="_blank"><i
                                              class="fa-brands fa-facebook"></i></a>
                                  </li>
                              </ul>
                          </div>
                      </div>
                  </nav>
              </div>
          </div>
      </section>
  
      `;
    }
}
class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `    
      <!-- Footer !-->
      <section aria-label="Web page footer">
          <div class="rainbow-shadow">
              <div class="footer">
                  <footer class="navbar navbar-expand-lg navbar-dark bg-dark">
                      <div class="container-fluid"><a class="navbar-brand">&copy; 2023 | Shenandoah Valley Pride
                              Alliance
                              Inc.</a>
                          <div class="collapse navbar-collapse">
                              <ul class="navbar-nav me-auto mb-2 mb-lg-0 nav-fill w-100">
                                  <li class="nav-item"><a class="nav-link"> A 501c3 Nonprofit Organization </a></li>
                                  <li class="nav-item"><a class="nav-link"
                                          href="https://iconscout.com/contributors/twitter-inc" target="_blank"> Free
                                          Rainbow
                                          Emoji by Icon Twitter Emoji </a></li>
                              </ul>
                              <ul class="navbar-nav d-flex flex-row me-1">
                                  <li class="nav-item me-3 me-lg-0"><a title="Shop & Donate" class="nav-link"
                                          href="https://shenandoahvalleypride-108313.square.site/" target="_blank"><i
                                              class="fa-solid fa-cart-shopping"></i></a></li>
                                  <li class="nav-item me-3 me-lg-0"><a title="Facebook" class="nav-link"
                                          href="https://www.facebook.com/shenandoahvalleypride/" target="_blank"><i
                                              class="fa-brands fa-facebook"></i></a></li>
                              </ul>
                          </div>
                      </div>
                  </footer>
              </div>
          </div>
      </section>  
      `;
    }
}

class Site extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `    
        <!-- Meta !-->
        <meta name="author" content="Felix Taylor">
        <meta http-equiv="content-type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description"
            content="Shenandoah Valley Pride Festival | Harrisonburg, VA Celebrating the diversity of the LGBTQ community in the Shenandoah Valley">
        <meta property="og:type" content="website">
        <meta property="og:image"
            content="//nebula.wsimg.com/e95509c1ad1989f413718b8ec37c4451?AccessKeyId=C1D015EE22B50FAD7EE6&amp;disposition=0&amp;alloworigin=1">
        <meta property="og:site_name" content="Shenandoah Valley Pride Alliance">
        <meta property="og:description"
            content="Shenandoah Valley Pride Festival | Harrisonburg, VA Celebrating the diversity of the LGBTQ community in the Shenandoah Valley">
    
        <!-- Style imports !-->
        <link rel="stylesheet" href="styles/style.css">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css" rel="stylesheet">
        <link href="http://maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet">
    
        <!-- Scripts !-->
        <script src="js/cookie.js"></script>
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
            integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous">
        </script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.6/dist/umd/popper.min.js"
            integrity="sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut" crossorigin="anonymous">
        </script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.2.1/dist/js/bootstrap.min.js"
            integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k" crossorigin="anonymous">
        </script>
    
        <link rel="icon" href="images/rainbow.png">

      `;
    }
}

customElements.define('rb-header', Header);
customElements.define('rb-footer', Footer);
customElements.define('site-wide', Site);