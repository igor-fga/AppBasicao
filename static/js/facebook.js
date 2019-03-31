var fbtoken = "";

window.fbAsyncInit = function() {
	FB.init({
		appId: '158550007562379',
		cookie: true,
		xfbml: true,
		version: 'v3.2'
	});
	FB.AppEvents.logPageView();

	FB.getLoginStatus(function(response) {
		statusChangeCallback(response);
	});

	FB.logout(function(response) {
		// Person is now logged out
	});
};

(function(d, s, id) {
	var js, fjs = d.getElementsByTagName(s)[0];
	if (d.getElementById(id)) {
		return;
	}
	js = d.createElement(s);
	js.id = id;
	js.src = "https://connect.facebook.net/en_US/sdk.js";
	fjs.parentNode.insertBefore(js, fjs);
})
(document, 'script', 'facebook-jssdk');


function checkLoginState() {
	FB.getLoginStatus(function(response) {
	  statusChangeCallback(response);
	});
}

function statusChangeCallback(response) {
//FB.login(function(response) {
	if (response.status === 'connected') {
		// Logged into your app and Facebook.
	  } else {
		// The person is not logged into this app or we are unable to tell. 
	  }
 // }, {scope: 'public_profile,email'});
}

function testAPI() {
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', function(response) {
      console.log('Successful login for: ' + response.name);
    //  document.getElementById('status').innerHTML =
      //  'Thanks for logging in, ' + response.name + '!';
    });
  }