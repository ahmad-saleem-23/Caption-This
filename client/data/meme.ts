interface Image {
  id: number,
  name: string,
  link: string,
  comment: string [],
}

interface Memes{ 
  images: Image []
}

const memes : Memes  = {images: [
  {id: 1, name: 'string', link: 'string', comment:  ['']  }, 
  {id: 2, name: 'string', link: 'string', comment:  ['']  }, ]}


// https://github.com/tohora-2023/worldwide-routing/blob/ahmad/data/continents.ts