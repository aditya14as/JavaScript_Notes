var user = {
    firstName : "Aditya",
    lastName: "Singh",
    role: "Admin",
    loginCount : 30,
    courseList: [],
    buyCourse: function(courseName){
        this.courseList.push(courseName);
    },
    getCourseCount: function(){
        return `${this.firstName} registed in total of ${this.courseList.length} courses`;
    }
};
console.log(user.firstName);
console.log(user.courseList);
user.buyCourse("Angular");
console.log(user.courseList);
console.log(user.getCourseCount());

