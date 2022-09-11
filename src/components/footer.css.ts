import { style } from "@vanilla-extract/css"
import { theme } from "../theme.css"
import { media } from "./ui.css"

export const footer = style({
  position: "fixed",
  bottom: 0,
  "@media": {
    [media.small]: {
      position: "relative",
      bottom: 0,
    },
  },
})
