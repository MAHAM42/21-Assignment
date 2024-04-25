// ASSIGNMENT NO 21:

/*
They think of something you could store in a TypeScript Object.
 Write a program that creates Objects containing these items.
 */

 console.log("ASSIGNMENT NO 21:");

 interface itCourse {
    courseName: string,
    location: string,
    onSiteStudents: number;
 };

 let itCourse = {
    courseName: "Certified Cloud Applied Generative AI Engineering",
    location: "Governor House Sindh",
    onSiteStudents: 50000
};

console.log(itCourse);
