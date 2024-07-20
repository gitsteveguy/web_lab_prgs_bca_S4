
const gallery_data = [{
    src :'bbt.jpg',
    title : 'Basketball Tournament',
    desc : 'Fr Cyriac Madathil appreciating CNC Basketball team'
},{
    src :'radio.jpeg',
    title : 'Campus Radio',
    desc : 'RJ Steve Sajan Jacob hosting campus radio'
}]
gallery_grid = document.querySelector('#gallery_grid');
if(gallery_grid){
    for(i=0;i<16;i++){
       data = gallery_data[i%2];
       card = document.createElement('div');
       card.setAttribute('class','card');
       img = document.createElement('img')
       img.setAttribute('src','./gallery/'+ data.src);
       card.append(img);
       title = document.createElement('h3')
       title.innerText=data.title;
       card.append(title)
       desc = document.createElement('p')
       desc.innerText=data.desc;
       card.append(desc)
       gallery_grid.append(card);
    }
}