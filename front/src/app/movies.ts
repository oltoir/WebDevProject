export interface Movie {
    id: number;
    name: string;
    storyline: string;
    poster: string;
    genre: string;
    timing: string;
    rating: number;
    photo_1: string;
    photo_2: string;
    photo_3: string;
}


export const movies = [
    {
        id: 1,
        name: 'Death in Nile',
        storyline: 'Belgian sleuth Hercule Poirots vacation aboard a glamorous river steamer turns into a terrifying search for a murderer when a picture-perfect couples idyllic honeymoon is tragically cut short. Set against an epic landscape of sweeping Egyptian desert vistas and the majestic Giza pyramids, this tale of unbridled passion and incapacitating jealousy features a cosmopolitan group of impeccably dressed travelers, and enough wicked twists and turns to leave audiences guessing until the final, shocking denouement.',
        poster: 'https://m.media-amazon.com/images/M/MV5BNjI4ZTQ1OTYtNTI0Yi00M2EyLThiNjMtMzk1MmZlOWMyMDQwXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_FMjpg_UY720_.jpg',
        genre: 'Crime',
        timing: '2 hours 7 minutes',
        rating: 8,
        photo_1: 'https://m.media-amazon.com/images/M/MV5BNGMxNDk4NzEtMTAxNS00M2E4LTg2ODQtOWRkMTEzYzNjMWExXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_FMjpg_UX1280_.jpg',
        photo_2: 'https://m.media-amazon.com/images/M/MV5BZGI0MjYxOWEtZjU4MC00ZDEwLWFkZTgtYzg2NjJiMTU4MGQ5XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg',
        photo_3: 'https://m.media-amazon.com/images/M/MV5BNDhkYzk0YWItYmQ2Mi00OGVkLWI0NTAtOTY4Yzk2ZWVlYTM4XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg'

    },
    {
        id: 2,
        name: 'Thor: Love and Thunder',
        storyline: 'Thors retirement is interrupted by a galactic killer known as Gorr the God Butcher, who seeks the extinction of the gods. To combat the threat, Thor enlists the help of King Valkyrie, Korg and ex-girlfriend Jane Foster, who - to Thors surprise - inexplicably wields his magical hammer, Mjolnir, as the Mighty Thor. Together, they embark upon a harrowing cosmic adventure to uncover the mystery of the God Butchers vengeance and stop him before its too late.',
        poster: 'https://m.media-amazon.com/images/M/MV5BMzJjZWYzNTctODgwOS00OGNiLTg4MjktMDlmNWUxNjczMzljXkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_.jpg',
        genre: 'Action',
        timing: '2 hours',
        rating: 7,
        photo_1: 'https://m.media-amazon.com/images/M/MV5BZDA4ZmViZjUtMzU5Ni00NjJhLTk4OWItMTY2YWQ1YTI3NmUwXkEyXkFqcGdeQXVyNjc0NzQzNTM@._V1_.jpg',
        photo_2: 'https://m.media-amazon.com/images/M/MV5BYmU0MGZkYmYtYmE0OS00ODg2LWEyZjktZDAyMTY0YmY2ZDE1XkEyXkFqcGdeQXVyNjc0NzQzNTM@._V1_FMjpg_UX1280_.jpg',
        photo_3: 'https://m.media-amazon.com/images/M/MV5BMGU4Mjk4NWEtNGY2OS00MWY0LWIzYjYtYTRlYTRkMDViMWU5XkEyXkFqcGdeQXVyNjc0NzQzNTM@._V1_FMjpg_UX1280_.jpg',
    }
]