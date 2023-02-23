class Auth {
	constructor(
		userType = "",
		accessToken = "",
		refreshToken = "",
		access = "not-access",
	) {
		this.userType = userType;
		this.accessToken = accessToken;
		this.refreshToken = refreshToken;
		this.access = access;
	}
}

export default Auth;
