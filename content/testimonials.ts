export interface Testimonial {
  id: string
  quote: string
  author: string
  role: string
  company: string
  avatar: string
  rating: number
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote: "Working with this team was exceptional. They delivered a beautiful, high-performing website that exceeded our expectations and drove real business results.",
    author: "Sarah Johnson",
    role: "CEO",
    company: "Fashion Forward",
    avatar: "/images/testimonials/sarah-johnson.jpg",
    rating: 5
  },
  {
    id: "2",
    quote: "The AI automation workflows they built for us saved countless hours and improved our efficiency by 300%. Truly transformative for our business operations.",
    author: "Michael Chen",
    role: "Operations Director",
    company: "TechStart Inc.",
    avatar: "/images/testimonials/michael-chen.jpg",
    rating: 5
  },
  {
    id: "3",
    quote: "Our mobile app became the #1 fitness app in our category thanks to their incredible design and development work. The user experience is flawless.",
    author: "Emily Rodriguez",
    role: "Product Manager",
    company: "FitLife Studios",
    avatar: "/images/testimonials/emily-rodriguez.jpg",
    rating: 5
  },
  {
    id: "4",
    quote: "The SEO campaign they ran for us resulted in a 400% increase in organic traffic. Our business has grown exponentially since working with them.",
    author: "David Thompson",
    role: "Marketing Director",
    company: "Home Services Pro",
    avatar: "/images/testimonials/david-thompson.jpg",
    rating: 5
  },
  {
    id: "6",
    quote: "The analytics dashboard they built gives us real-time insights that have revolutionized how we make business decisions. Absolutely game-changing.",
    author: "Jennifer Lee",
    role: "VP of Product",
    company: "DataFlow Solutions",
    avatar: "/images/testimonials/jennifer-lee.jpg",
    rating: 5
  }
]
