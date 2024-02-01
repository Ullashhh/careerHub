// import React from 'react';

const CategoryItem = ({item}) => {
    return (
        <div className="bg-slate-100 px-3 py-6 rounded-md">
            <img src={item.logo} alt="" className="mx-auto mt-2 mb-4"/>
            <p className="text-gray-500">{item.category_name}</p>
            <p className="text-gray-500">{item.availability}</p>
        </div>
    );
};

export default CategoryItem;