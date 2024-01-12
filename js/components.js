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
          <div class="mobile-footer">
              <div class="rainbow-shadow">
                  <footer class="navbar navbar-expand-lg navbar-dark bg-dark">
                      <div class="container-fluid"><a class="navbar-brand">&copy; 2024 | Shenandoah Valley Pride
                              Alliance
                              Inc.</a>
                      </div>
                  </footer>
              </div>
          </div>

          <div class="footer">

              <div class="rainbow-shadow">
                  <footer class="navbar navbar-expand-lg navbar-dark bg-dark">
                      <div class="container-fluid"><a class="navbar-brand">&copy; 2024 | Shenandoah Valley Pride
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

customElements.define('rb-header', Header);
customElements.define('rb-footer', Footer);
