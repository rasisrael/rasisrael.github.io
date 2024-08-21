import React from 'react';

const WorkExperience: React.FC = () => {
    return (
        <section id="experience" className="my-5">
            <h2 className="text-warning">Work Experience</h2>
            <div className="mb-3">
                <h3 className="h5">Night Clerk - RIRG Lucie Canuel</h3>
                <p>07/2024 - Present, Ville Saint-Laurent, Quebec</p>
                <p>Secure and supervise the night shift of a youth group home. Follow up and enter information into the Telemedic's SOFI management system.</p>
            </div>
            <div className="mb-3">
                <h3 className="h5">Computer Repair - Freelance</h3>
                <p>2007 - Present</p>
                <p>Computer setup and repair for individuals and organizations.</p>
            </div>
            <div className="mb-3">
                <h3 className="h5">Order Picker - SAQ</h3>
                <p>06/2023 - 10/2023, Montreal, Quebec</p>
                <p>Fulfilled orders in a warehouse environment.</p>
            </div>
            <div className="mb-3">
                <h3 className="h5">Shipping/Receiving Supervisor - Aux Vivres</h3>
                <p>04/2019 - 05/2023, Montreal, Quebec</p>
                <p>Planned routes and deliveries for a food company. Managed the fleet and personnel.</p>
            </div>
        </section>
    );
};

export default WorkExperience;
