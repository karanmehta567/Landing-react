import { Container } from "../shared/Container"

export const Number=()=>{
    return (
        <section className="relative mt-10 md:mt-16">
            <Container className="flex justify-center items-center">
                <div className="mx-auto lg:mx-0 p-5 sm:py-8 max-w-5xl rounded-3xl bg-box-bg border border-box-border shadow-lg shadow-box-shadow md:divide-x divide-box-border grid grid-cols-2 md:grid-cols-4">
                    <div className="text-center px-5">
                        <h2 className="font-semibold text-2xl sm:text-3xl md:text-4xl text-heading-1">90+</h2>
                        <p className="mt-2 text-heading-2">AI Models implemented</p>
                    </div>
                     <div className="text-center px-5">
                        <h2 className="font-semibold text-2xl sm:text-3xl md:text-4xl text-heading-1">99.99%</h2>
                        <p className="mt-2 text-heading-2">Best Uptime</p>
                    </div>
                     <div className="text-center px-5">
                        <h2 className="font-semibold text-2xl sm:text-3xl md:text-4xl text-heading-1">1000+</h2>
                        <p className="mt-2 text-heading-2">Clients Served</p>
                    </div>
                     <div className="text-center px-5">
                        <h2 className="font-semibold text-2xl sm:text-3xl md:text-4xl text-heading-1">10+</h2>
                        <p className="mt-2 text-heading-2">Years of Innovation</p>
                    </div>
                </div>
            </Container>
        </section>
    )
}