'use strict'

$(init);
function init() {
   createProjs();
   renderProjs();
   $('.contact-send-btn').click(onSendContactMe);
}

function renderProjs() {
   var projs = getProjsToShow();
   var strHTMLs = projs.map((proj) => {
      return `<div class="col-md-4 col-sm-6 portfolio-item">
      <a class="portfolio-link" data-toggle="modal" onclick="renderModal(${proj.id})" href="#portfolioModal">
      <div class="portfolio-hover">
      <div class="portfolio-hover-content">
      <i class="fa fa-plus fa-3x"></i>
      </div>
      </div>
      <img class="img-fluid" src="img/portfolio/${proj.id}-thumbnail.jpg" alt="">
      </a>
      <div class="portfolio-caption">
      <h4>${proj.name}</h4>
      <p class="text-muted">${proj.title}</p>
      </div>
      </div>`
   });
   $('.items-container').html(strHTMLs);
}

function renderModal(projId) {
   const proj = getProjById(projId);
   const publishDate = getDateFromTimestamp(proj.publishedAt);
   const strHTML = `<h2>${proj.name}</h2>
   <p class="item-intro text-muted">${proj.title}.</p>
   <img class="img-fluid d-block mx-auto" src="img/portfolio/${proj.id}-full.jpg" alt="">
   <p>${proj.desc}</p>
   <ul class="list-inline">
   <li>Date: ${publishDate}</li>
   <li>Client: Coding Academy Ltd.</li>
   <li>Category: ${proj.labels.join(', ')}</li>
   </ul>
   <div class="flex-align-center portfolio-modal-buttons-container">
   <button class="btn btn-success go-to-btn" type="button">
   <i class="fa fa-mouse-pointer"></i>
   Go to site</button>
   <button class="btn btn-primary" data-dismiss="modal" type="button">
   <i class="fa fa-times"></i>
   Close Project</button>
   </div>`;
   $('.modal-body').html(strHTML);
   // console.log(proj.url);
   $('.go-to-btn').click(proj.url, goToSite);
}

function onSendContactMe() {
   var email = $('#contact-email').val();
   var subject = $('#contact-subject').val();
   var msgBody = $('#contact-msg').val();
   var url = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${msgBody}`;
   window.open(url, '_blank');
}

function goToSite(url) {
   window.open(url.data, '_blank');
}