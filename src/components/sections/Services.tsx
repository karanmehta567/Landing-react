import { services } from "../../utils/Services"
import { Service } from "../cards/Section"
import { Container } from "../shared/Container"
import { Paragraph } from "../shared/Paragraph"
import { Title } from "../shared/title"

export const Services=()=>{
    return (
        <section id='section'>
            <Container className="space-y-10 md:space-y-12">
                <div className="text-center max-w-3xl mx-auto space-y-4">
                 <Title>Our Services</Title>
                 <Paragraph>
                    Unlock the potentials of advanced machine learning
                 </Paragraph>
                </div>
                <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-6 lg:gap-8">
                    {services.map((service,key)=>{
                        return ( <Service key={key}title={service.title} description={service.description} icon={service.icon}></Service>
                        )
                    })
}
                </div>
            </Container>
        </section>
    )
}