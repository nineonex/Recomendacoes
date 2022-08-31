import './style.css'
import { Carousel } from '../../components/carousel'
export function Home() {
  return (
    <section className="Home">
      <h1>Home</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A labore
        facilis dolorem aperiam sequi molestiae illum delectus temporibus
        laborum, eos quae voluptate ab, vitae impedit nostrum repudiandae modi
        ad sint?
      </p>
      <Carousel />
      <Carousel />
    </section>
  )
}
