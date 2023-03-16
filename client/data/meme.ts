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
  {id: 1, name: 'squint', link: 'img-1.gif', comment:  ['']  }, 
  {id: 2, name: 'john travolta', link: 'img-2.gif', comment:  ['']  },
  {id: 3, name: 'monkey', link: 'img-3.gif', comment:  ['']  },
  {id: 4, name: 'sad-cat', link: 'img-4.png', comment:  ['']  },
  {id: 5, name: 'unimpressed-guy', link: 'img-5.png', comment:  ['']  },
  {id: 6, name: 'burning-computers', link: 'img-6.png', comment:  ['']  },
  {id: 7, name: 'swing-man', link: 'img-7.gif', comment:  ['']  },
  {id: 8, name: 'pizza', link: 'img-8.gif', comment:  ['']  },
  {id: 9, name: 'kermit-typing', link: 'img-9.gif', comment:  ['']  },
  {id: 10, name: 'office-cringe', link: 'img-10.gif', comment:  [''] },
  {id: 11, name: 'rolling-eyes', link: 'img-11.gif', comment:  [''] }]}


  
export default memes