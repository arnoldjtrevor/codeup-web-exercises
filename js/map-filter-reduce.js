const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

//Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
let threeLangs = users.filter((user) => user.languages.length > 2);
console.log(threeLangs);

// Use .map to create an array of strings where each element is a user's email address
let userEmails = users.map(user => {
    return user.email;
});
console.log(userEmails);

// Use .reduce to get the total years of experience from the list of users.
let totalExp = users.reduce((total, user) => {
    return total + user.yearsOfExperience;
}, 0);
console.log(totalExp);

// Once you get the total of years you can use the result to calculate the average.
let averageExp = totalExp/users.length;
console.log(averageExp);


// Use .reduce to get the longest email from the list of users.
let longestEmail = users.reduce((longestEmail, user) => {
    if (longestEmail.length > user.email.length) {
        return longestEmail;
    } else {
        return user.email;
    }
}, "");
console.log(longestEmail);

// Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.
let instructorsString = users.reduce((finalString, instructor, index) => {
    if(index < users.length - 1) {
        return `${finalString}${instructor.name.substring(0,1).toUpperCase()}${instructor.name.substring(1,instructor.name.length).toLowerCase()}, `
    } else {
        return `${finalString}${instructor.name.substring(0,1).toUpperCase()}${instructor.name.substring(1,instructor.name.length).toLowerCase()}.`
    }
},"Your instructors are: ");
console.log(instructorsString);

