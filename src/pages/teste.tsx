import { GetServerSideProps } from "next"

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {}
  }
}

export default function TestePage () {
  return (
    <h1>running teste!</h1>
  )
}