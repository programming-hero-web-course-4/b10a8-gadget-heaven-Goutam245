import { useEffect } from "react";
import Heading from "../Components/Heading";
import { useLoaderData } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis } from 'recharts';

const Statistics = () => {
    useEffect(() => {
        document.title = "Statistics | Gadzet-Zone";
    }), [];
    const data = useLoaderData();
    return (
        <div>
            <div className="bg-[#9538E2] pt-5 pb-20">
                <Heading
                    title={'Statistics'}
                    subtitle={'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'}>
                </Heading>
            </div>
            <div className="flex items-center justify-center mt-6">
                <BarChart width={1200} height={500} data={data}>
                    <Bar dataKey="price" fill="#8884d8" />
                    <XAxis dataKey="category"></XAxis>
                    <YAxis></YAxis>
                    {/* <Tooltip></Tooltip> */}
                </BarChart>
            </div>
        </div>
    );
};
export default Statistics;
