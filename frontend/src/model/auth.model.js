class Auth {
	constructor (userType = '', accessToken = '', refreshToken = '') {
		this.userType = userType;
		this.accessToken = accessToken;
		this.refreshToken = refreshToken;
	}
}

export default Auth;
