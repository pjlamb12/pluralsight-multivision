angular.module('app').factory('mvCachedCourses', function(mvCourse) {
	var courseList;
	var refreshes = 0;

	return {
		query: function() {
			if(!courseList || refreshes % 10 === 0) {
				courseList = mvCourse.query();
			}
			refreshes++;
			return courseList;
		}
	}
});
