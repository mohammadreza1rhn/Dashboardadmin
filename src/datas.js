let xAxisData = [
  {
    name: "Jan",
    sale: 110_000,
  },
  {
    name: "Feb",
    sale: 99_000,
  },
  {
    name: "Mar",
    sale: 12_090,
  },
  {
    name: "Apr",
    sale: 99_000,
  },
  {
    name: "May",
    sale: 54_000,
  },
  {
    name: "Jun",
    sale: 85_000,
  },
  {
    name: "Jul",
    sale: 34_000,
  },
  {
    name: "Agu",
    sale: 18_598,
  },
  {
    name: "Sep",
    sale: 0,
  },
  {
    name: "Oct",
    sale: 73_078,
  },
  {
    name: "Nov",
    sale: 12_900,
  },
  {
    name: "Dec",
    sale: 97_000,
  },
];

const newMembers = [
  {
    id: 1,
    userName: "Mohammad Reza",
    title: "Programmer",
    img: "images/profile.jfif",
  },
  {
    id: 2,
    userName: "Hasan Dolati",
    title: "Hacker",
    img: "images/sasan.jpg",
  },
  {
    id: 3,
    userName: "Reza Karami",
    title: "Seo Eng",
    img: "images/qadir.jpg",
  },
  {
    id: 4,
    userName: "Zahra Rezaii",
    title: "UI Designer",
    img: "images/zahra.jpg",
  },
];
const transactions = [
  {
    id: 1,
    customer: "Mohammad Reza",
    date: "22 Jun 2022",
    amount: 123,
    status: "Approved",
    img: "images/amir.jpg",
  },
  {
    id: 12,
    customer: "Hamid Reza",
    date: "1 May 2022",
    amount: 198,
    status: "Decline",
    img: "images/sasan.jpg",
  },
  {
    id: 3,
    customer: "Majid Hasani",
    date: "11 Dec 2022",
    amount: 125,
    status: "Pending",
    img: "images/hamze.jpg",
  },
  {
    id: 4,
    customer: "Morteza Rezaii",
    date: "18 Nov 2022",
    amount: 263,
    status: "Approved",
    img: "images/amin.jpg",
  },
];

let userRows = [
  {
    id: 1,
    username: "Moein Hasani",
    avatar: "images/profile.jfif",
    status: "active",
    transaction: "$98000.62",
    email: "meandyou@gmail.com",
  },
  {
    id: 2,
    username: "MohammadReza Alishahi",
    avatar: "images/amin.jpg",
    status: "active",
    transaction: "$250.62",
    email: "meandyou@gmail.com",
  },
  {
    id: 3,
    username: "Mersad Hamidi",
    avatar: "images/amir.jpg",
    status: "active",
    transaction: "$2360.62",
    email: "meandyou@gmail.com",
  },
  {
    id: 4,
    username: "Danial Akbari",
    avatar: "images/qadir.jpg",
    status: "active",
    transaction: "$50.62",
    email: "meandyou@gmail.com",
  },
  {
    id: 5,
    username: "Kamran KhodaDost",
    avatar: "images/sasan.jpg",
    status: "active",
    transaction: "$9650.62",
    email: "meandyou@gmail.com",
  },
];

let products = [
  {
    id: 1,
    title: "Asus ",
    avatar: "images/asus.jpeg",
    price: 1100,
  },
  {
    id: 2,
    title: "Acer",
    avatar: "images/acer.jpg",
    price: 890,
  },
  {
    id: 3,
    title: "Dell",
    avatar: "images/dell.jpg",
    price: 963,
  },
  {
    id: 4,
    title: "Asus ",
    avatar: "images/asus.webp",
    price: 990,
  },
  {
    id: 5,
    title: "HP ",
    avatar: "images/hp.jpg",
    price: 670,
  },
];

const productData = [
  {
    name: "jan",
    sale: 4000,
  },
  {
    name: "Feb",
    sale: 3500,
  },
  {
    name: "Mar",
    sale: 6000,
  },
];

export { xAxisData, newMembers, transactions, userRows, products, productData };
