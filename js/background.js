const images = ["https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000","https://images.unsplash.com/photo-1553095066-5014bc7b7f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2FsbCUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80","https://media.istockphoto.com/photos/forest-wooden-table-background-summer-sunny-meadow-with-green-grass-picture-id1353553203?b=1&k=20&m=1353553203&s=170667a&w=0&h=QTyTGI9tWQluIlkmwW0s7Q4z7R_IT8egpzzHjW3cSas=","https://lumiere-a.akamaihd.net/v1/images/sa_pixar_virtualbg_coco_16x9_9ccd7110.jpeg","https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__340.jpg"];

const chosenImage = images[Math.floor(Math.random()*images.length)];

document.body.style.setProperty("background-image", `linear-gradient(rgba(204, 204, 204, 0.8), rgba(204, 204, 204, 0.1)), url(${chosenImage})`);
