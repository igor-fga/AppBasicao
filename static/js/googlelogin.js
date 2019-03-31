var googletoken = null;

function onSuccess(googleUser) {
    console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
    token = googleUser.getAuthResponse().id_token;
}

function onFailure(error) {
    console.log(error);
}

function renderButton() {
    gapi.signin2.render('google-signin2', {
        'scope': 'profile email',
        'width': 240,
        'height': 50,
        'longtitle': true,
        'theme': 'dark',
        'onsuccess': onSuccess,
        'onfailure': onFailure
    });
}