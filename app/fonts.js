import { Raleway, Open_Sans } from 'next/font/google'

export const openSans = Open_Sans({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin']
})

export const raleway = Raleway({
    weight: ['200', '400', '600'],
    subsets: ['latin'],
    style: ['normal', 'italic']
})