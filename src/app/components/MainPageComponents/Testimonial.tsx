import { testimonialComments } from '@/data/comments'
import TestimonialCard from './TestimonialCard'

const Testimonial = () => {
    return (
        <section className="bg-primary-white p-2 flex flex-col items-center justify-center lg:py-10 relative">
            <div className="container mx-auto flex flex-col gap-8 relative z-30">
                <h1 className="text-4xl font-bold text-primary-white text-center">Testimonial</h1>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 flex-wrap">
                    {testimonialComments && testimonialComments.map(user => {
                        return <TestimonialCard key={user.userName} companyImg={user.companyImg} userComment={user.userComment} userName={user.userName} userRole={user.userRole} />
                    })}
                </div>
            </div>
            <video className="absolute w-full h-full object-cover opacity-90" autoPlay muted loop >
                <source src="/loopvideo.mp4" />
            </video>
        </section>
    )
}

export default Testimonial