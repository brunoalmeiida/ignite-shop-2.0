import { styled } from "../../styles";
import * as Dialog from "@radix-ui/react-dialog";

export const CartContent = styled(Dialog.Content, {
    position: "fixed",
    top: 0,    
    right: 0,
    bottom: 0,
    width: "30rem",
    background: "$gray800",
    padding: "3rem",
    paddingBottom: "4.5rem",
    display: "flex",
    flexDirection: "column",

    h2: {
        fontSize: "$lg",
        fontWeight: 700,
        color: "$gray100",
        marginBottom: "2rem",
        marginTop: "2rem",
    },

    "> section": {
        display: "flex",
        flexDirection: "column",
        gap: "1.5rem",
        flex: 1,
        overflow: "auto",
    },
})

export const CartClose = styled(Dialog.Close, {
    background: "none",
    border: "none",
    color: "$gray500",
    position: "absolute",
    top: "1.75rem",
    right: "1.75rem",
    cursor: "pointer",
})

export const CartProduct = styled("div", {
    width: "100%",
    display: "flex",
    gap: "1.25rem",
    alignItems: "center",
    height: "5.8125rem",
})

export const CartProductImage = styled("div", {
    background: "linear-gradient(180deg, #1EA483 0%, #7465D4 100%)",
    height: "5.8125rem",
    width: "5.8125rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,

    img: {
        objectFit: "cover",
    },
})

export const CartProductDetails = styled("div", {
    display: "flex",
    flexDirection: "column",
    height: "100%",

    p: {
        color: "$gray300",
        fontSize: "$md",
    },

    strong: {
        fontSize: "$md",
        marginTop: 4,
        fontWeight: 700,
    },

    button: {
        marginTop: "auto",
        width: "max-content",
        background: "none",
        color: "$green500",
        fontSize: "1rem",
        fontWeight: 700,
        border: "none",
        cursor: "pointer",
    },
})

export const CartFinalization = styled("div", {
    display: "flex",
    flexDirection: "column",
    marginTop: "auto",

    button: {
        width: "100%",
        background: "$green500",
        color: "$white",
        fontSize: "$md",
        height: "4.3125rem",
        border: "none",
        borderRadius: 8,
        fontWeight: 700,
        cursor: "pointer",
        
        "&:disabled": {
            opacity: 0.6,
            cursor: "not-allowed",
        },

        "&:not(:disabled):hover": {
            background: "$green300",
        },
    },
})

export const FinalizationDetails = styled("section", {
    display: "flex",
    flexDirection: "column",
    gap: 8,
    marginBottom: 55,

    div: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",

        p: {
            fontSize: "$md",
            color: "$gray300",
        },

        "&:last-child": {
            fontWeight: "bold",

            span: {
                fontSize: "$md",                
            },

            p: {
                color: "$gray100",
                fontSize: "$xl",
            },
        },
    },
})