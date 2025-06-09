import { Oswald, Raleway } from "next/font/google";

export const fontPrimary = Oswald({
    subsets: ["latin"],
    style: "normal",
    weight: "400",
})

export const fontSecondary = Raleway({
    weight: "400",
    subsets: ["latin"],
    style: "normal"
})