// Set a same-site cookie for first-party contexts
document.cookie = 'cookie1=value1; SameSite=Strict';
// Set a cross-site cookie for third-party contexts
document.cookie = 'cookie2=value2; SameSite=Strict;';