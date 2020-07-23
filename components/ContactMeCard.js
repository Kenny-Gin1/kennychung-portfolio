export default function ContactMe() {
  return (
    <div>
      <h1>Email: {process.env.NEXT_PUBLIC_EMAIL} </h1>
      <h1>Phone: {process.env.NEXT_PUBLIC_TELEPHONE_NUMBER}</h1>
    </div>
  )
}
