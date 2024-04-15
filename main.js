document.addEventListener("DOMContentLoaded", function() {

  const skipLinkEle1 = document.getElementById("skipLink1");
    if(skipLinkEle1){
    document.addEventListener("click", function() {
      skipLinkEle1.classList.add("styled-skip-chevron");

      setTimeout(function() {
        skipLinkEle1.classList.remove("styled-skip-chevron");
      }, 1000);
    });

    skipLinkEle1.addEventListener("click", function(event) {
      event.preventDefault();

      window.location.href = "Third-Page.html";
    });
  }

  const chevronContainerEle1 = document.getElementById("chevronContainer1");
  if(chevronContainerEle1){
    document.addEventListener("click", function() {
      chevronContainerEle1.classList.add("styled-skip-chevron");

      setTimeout(function() {
        chevronContainerEle1.classList.remove("styled-skip-chevron");
      }, 1000);
    });

    chevronContainerEle1.addEventListener("click", function() {
        // Navigate to the second page
        window.location.href = "Second-Page.html";
      });
    }

    const skipLinkEle2 = document.getElementById("skipLink2");
    if(skipLinkEle2){
      document.addEventListener('click', function(event) {
        skipLinkEle2.classList.add("styled-skip")

        setTimeout(function() {
          skipLinkEle2.classList.remove("styled-skip");
        }, 1000);
      });

      skipLinkEle2.addEventListener("click", function(event) {
        event.preventDefault();
  
        window.location.href = "Third-Page.html";
      });

    }

  const loginLinkEl = document.getElementById("loginLink");
  if(loginLinkEl){
    loginLinkEl.addEventListener('click', function(event) {
      event.preventDefault();

      window.location.href = "Fourth-Page.html";
    })
  }

  const createAccountBtnEl = document.getElementById('createAccountBtn');
  if (createAccountBtnEl) {
    createAccountBtnEl.addEventListener('click', function(event) {
      event.preventDefault();
      // Redirect to next page
      window.location.href = "Fifth-Page.html";

    });
  }

  const accountLoginBtnEl = document.getElementById("accountLoginBtn");
  if(accountLoginBtnEl){
    accountLoginBtnEl.addEventListener('click', function(event) {
      event.preventDefault();

      window.location.href = "Fifth-Page.html";
    })
  }
  const createLinkEl = document.getElementById("createLink");
  if(createLinkEl){
    createLinkEl.addEventListener('click', function(event) {
      event.preventDefault();

      window.location.href = "Third-Page.html"
    })
  }

  const confirmBtnEl = document.getElementById("confirmBtn");
  if(confirmBtnEl) {
    confirmBtnEl.addEventListener('click', function(event) {
      event.preventDefault();

      window.location.href = "Sixth-Page.html"
    })
  }

  const chartLinkEl = document.getElementById("chartLink");
  if(chartLinkEl){
    chartLinkEl.addEventListener('click', function(event) {
      event.preventDefault();

      window.location.href = "Seventh-Page.html"
    })
  }

  

  });