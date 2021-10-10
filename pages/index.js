import Navbar from '../components/Navbar';
import Products from '../components/Products';
export default function Home({products}) {
  return (
    <>
      <Navbar/>
      <Products products={products}/>
    </>
  )
}
//filtrar en getstaticprops
export const getStaticProps = async () => {
  try{
      const res = await fetch('http://localhost:3002/products')
      const data = await res.json()
      return {
          
          props: {
              products: data
          },
      }
  } catch (err) {
      console.log(err)
  }
}
