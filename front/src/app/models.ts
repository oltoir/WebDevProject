export interface Movie {
    id: number,
    name: string,
    description: string, 
    rate: number,
    length: string,
    cover: string,
    like:number,
    genre: string, 
}


export interface Genre {
    id: number,
    name: string,
}

export interface User {
    id: number,
    first_name: string,
    last_name: string,
    username: string,
    email: string,
    password: string,
    img: string
}

export interface Actor {
    id: number,
    first_name: string,
    last_name: string,
    img: string,
    movies: number [ ],
}

export interface AuthToken {
    token:string;
  }

export const movies = [
    {
        id: 1,
        name: 'Death in Nile',
        description: 'Belgian sleuth Hercule Poirots vacation aboard a glamorous river steamer turns into a terrifying search for a murderer when a picture-perfect couples idyllic honeymoon is tragically cut short. Set against an epic landscape of sweeping Egyptian desert vistas and the majestic Giza pyramids, this tale of unbridled passion and incapacitating jealousy features a cosmopolitan group of impeccably dressed travelers, and enough wicked twists and turns to leave audiences guessing until the final, shocking denouement.',
        cover: 'https://m.media-amazon.com/images/M/MV5BNjI4ZTQ1OTYtNTI0Yi00M2EyLThiNjMtMzk1MmZlOWMyMDQwXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_FMjpg_UY720_.jpg',
        genre: 'Crime',
        length: '2 hours 7 minutes',
        rate: 8,
        like: 2,

    },
    
]
