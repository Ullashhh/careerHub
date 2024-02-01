// import React from 'react';

import { useEffect, useState } from "react";
import CategoryItem from "../CategoryItem/CategoryItem";
import FeatureJobs from "../FeatureJobs/FeatureJobs";

const Category = () => {
    const [categoryData, setCategoryData] = useState([])
    useEffect(() => {
        fetch('data/categories.json')
        .then(res => res.json())
        .then(data => setCategoryData(data))
    }, [])
    return (
        <div className="text-center mt-32">
            <h1 className="text-5xl font-medium mb-5">Job Category List</h1>
            <p className="text-gray-500">Explore thousands of hob opportunities with all the information you need. Its your future.</p>
            <div className="grid grid-cols-4 mt-20 gap-10 mx-32">
                {
                    categoryData.map((item) => <CategoryItem key={item.id} item={item}></CategoryItem>)
                }
            </div>
            <div>
                <FeatureJobs></FeatureJobs>
            </div>
        </div>
    );
};

export default Category;