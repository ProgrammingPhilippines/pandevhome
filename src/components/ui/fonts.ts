import { Darker_Grotesque, Dela_Gothic_One } from "next/font/google";

export const darkerGrotesque = Darker_Grotesque({
  subsets: ['latin'],
  variable: '--font-darker-grotesque',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap'
});

export const delaGothic = Dela_Gothic_One({
  subsets: ['latin'],
  variable: '--font-dela-gothic',
  weight: '400',
  display: 'swap'
});