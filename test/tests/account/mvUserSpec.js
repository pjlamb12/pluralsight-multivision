describe('mvUser', function() {
	beforeEach(module('app'));

	describe('isAdmin', function() {
		it('should return false if ther roles array does not have an admin entry', inject(function(mvUser) {
			var user = new mvUser();
			user.roles = ['not admin'];
			expect(user.isAdmin()).to.be.falsey;
		}));
		it('should return true if ther roles array does have an admin entry', inject(function(mvUser) {
			var user = new mvUser();
			user.roles = ['admin'];
			expect(user.isAdmin()).to.be.falsey;
		}));
	})
})
