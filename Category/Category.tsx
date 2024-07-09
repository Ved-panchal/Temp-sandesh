"use client";

import Categorycard from '@/components/CategoryCard/Categorycard';
import TabCategories from "@/components/TabCategories/TabCategories";
import { CategoryNews } from '@/constant';
import React from 'react';

const Category = () => {

  const tabCategories = CategoryNews.filter((category) =>
    ["Food", "Travel", "Relationship"].includes(category.CategoryName)
  );

  const tabCategoryNames = new Set(tabCategories.map(category => category.CategoryName));

  return (
    <div className='w-full h-full flex flex-wrap justify-center items-center gap-3'>
      {CategoryNews.map((category, index) => {
        if (!tabCategoryNames.has(category.CategoryName)) {
          return <Categorycard key={index} index={index} {...category} />;
        }
        return null; 
      })}
      {
        tabCategories.length > 0 ?  <TabCategories TabCategories={tabCategories} /> : <></>
      }
    </div>
  );
};

export default Category;