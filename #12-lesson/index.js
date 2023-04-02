let mockData = [
    { id: 7, first_name: "Aloin", last_name: "Cutforth", email: "acutforth6@tinypic.com" },
    { id: 1, first_name: "Annie", last_name: "Corbert", email: "acorbert0@pagesperso-orange.fr" },
    { id: 4, first_name: "Frasco", last_name: "Bigley", email: "fbigley3@vistaprint.com" },
    { id: 5, first_name: "Sheila", last_name: "Gravey", email: "sgravey4@angelfire.com" },
    { id: 3, first_name: "Fredek", last_name: "Da Costa", email: "fdacosta2@mac.com" },
    { id: 2, first_name: "Clarice", last_name: "Legat", email: "clegat1@jigsy.com" },
    { id: 11, first_name: "Guendolen", last_name: "Elnough", email: "gelnougha@stumbleupon.com" },
    { id: 6, first_name: "Ashton", last_name: "Larvent", email: "alarvent5@google.com.br" },
    { id: 14, first_name: "Idalina", last_name: "Major", email: "imajord@icio.us" },
    { id: 8, first_name: "Dore", last_name: "Andrei", email: "dandrei7@flavors.me" },
    { id: 15, first_name: "Zandra", last_name: "Topliss", email: "ztoplisse@gizmodo.com" },
    { id: 9, first_name: "Solly", last_name: "Brinkler", email: "sbrinkler8@apache.org" },
    { id: 12, first_name: "Hallie", last_name: "Barrs", email: "hbarrsb@archive.org" },
    { id: 13, first_name: "Heall", last_name: "Rudgley", email: "hrudgleyc@angelfire.com" },
    { id: 10, first_name: "Astrid", last_name: "Marples", email: "amarples9@deviantart.com" },
];

// CRUD
// const sortById = () => {
//     let res = mockData.sort((a, b) => a.id - b.id);
//     mockData = res;
// }
// sortById();

const sortByAlphabet = () => {
    let res = mockData.sort((a, b) => a.first_name.localeCompare(b.first_name));
    mockData = res;
}
sortByAlphabet();

const deleteCurrentUser = (id) => {
    let res = mockData.filter(elem => elem.id !== id);
    mockData = res;
}
deleteCurrentUser(2);


const addData = (data) => {
    mockData = [...mockData, { ...data, id: 'mockId' }];
}
addData({ first_name: 'Kolin', last_name: 'Farrow', email: 'example@gmail.com' })


const upDateData = (data) => {
    mockData = mockData.map(elem => elem.id === data.id ? { ...elem, [data.type]: data.value } : elem);
}
upDateData({ id: 'mockId', type: 'first_name', value: 'Jane' })



console.log(mockData);