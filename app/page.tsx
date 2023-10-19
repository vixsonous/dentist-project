import Image from 'next/image'
import Menu from './global-components/Menu'

export default function Home() {
  return (
    <div>
      <Menu/>
      <div className='min-h-screen flex flex-col justify-center items-center'>
        <section className='flex flex-col justify-center items-center gap-2'>
          <h1 className='min-w-screen flex justify-center align-center'>Dentist</h1>
          <p className='w-64 '>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ratione fugiat quisquam ut reprehenderit maiores? Numquam consequuntur nesciunt id neque quas suscipit vitae deserunt, cum distinctio dicta! Earum, obcaecati labore.
          </p>
        </section>
      </div>
    </div>
  )
}
