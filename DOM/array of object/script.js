

let users = [
    {
        fullName: "Priya Verma",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500",
        profession: "UI/UX Designer",
        description: "Creative designer focused on building beautiful and user-friendly digital experiences."
    },
    {
        fullName: "Rahul Kapoor",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500",
        profession: "Full Stack Developer",
        description: "Enjoys solving complex problems and developing powerful web applications."
    },
    {
        fullName: "Ananya Singh",
        image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500",
        profession: "Digital Marketer",
        description: "Helps brands grow through creative marketing strategies and social media campaigns."
    },
    {
        fullName: "Rohan Mehta",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500",
        profession: "Photographer",
        description: "Professional photographer who loves capturing beautiful moments and telling stories through pictures."
    }
];

let sum =''

users.forEach(function(elem){
    sum = sum + ` <div id="card">
            <img src="${elem.image}"alt="">
            <h2>${elem.fullName}</h2>
            <h3>${elem.profession}</h3>
            <p>${elem.description}</p>
        </div>`
})


let main = document.querySelector('main')

main.innerHTML = sum;
