import Link from "next/link"
import { ImageContainer, ImagesContainer, SuccessContainer } from "../styles/pages/success"
import { GetServerSideProps } from "next"
import { stripe } from "../lib/stripe"
import Stripe from "stripe"
import Image from "next/image"
import Head from "next/head"

interface SuccessProps {
  customerName: string
  productImages: string[]
}

export default function Success({ customerName, productImages }: SuccessProps) {
  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>
        <meta name="robots" content="noindex" />
      </Head>

      <SuccessContainer>
        <ImagesContainer>
          {productImages.map((image, index) => (
            <ImageContainer key={index}>
              <Image src={image} width={120} height={110} alt="" />
            </ImageContainer>
          ))}
        </ImagesContainer>    

         <h1>Compra efetuada!</h1>    

        <p>
          Uhuul <strong>{customerName}</strong>, sua compra de{" "}
          {productImages.length} camisetas já está a caminho da sua casa.
        </p>

        <Link href={"/"}>Voltar ao catálogo</Link>
      </SuccessContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({
  query,
  params,
}) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    }
  }

  const sessionId = String(query.session_id)

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ["line_items", "line_items.data.price.product"],
  })

  const customerName = session.customer_details.name
  //const product = session.line_items?.data[0].price?.product as Stripe.Product
  const productImages = session.line_items?.data.map((item) => {
    const product = item.price.product as Stripe.Product
    return product.images[0]
  })

  return {
    props: {
      customerName,
      productImages, 
    },
  }
}