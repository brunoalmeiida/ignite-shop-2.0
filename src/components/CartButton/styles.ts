import { styled } from "../../styles";

export const CartButtonContainer = styled("button", {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "none",
    borderRadius: 6,
    position: "relative", 
    cursor: "pointer",

    variants: {
        color: {
            gray: {
                background: "$gray800",
                color: "$grey500", 
            },
            green: {
                background: "$green500",
                color: "$white",

                "&:hover": {
                    background: "$green300",
                },
            },
        },
        size: {
            medium: {
                width: "3rem",
                height: "3rem",
            },
            large: {
                width: "3.5rem",
                height: "3.5rem",
            }
        }
    },

     defaultVariants: {
        color: "gray", 
        size: "medium",
     }
})