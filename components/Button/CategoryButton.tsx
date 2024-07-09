import { Button } from '@nextui-org/react'
import React from 'react'
import { Category } from '@/constant'

const CategoryButton = ({CategoryName}:{CategoryName:string}) => {
  return (
    <div>
      <Button className='bg-primary text-white rounded-[10px]'>
        {CategoryName}
      </Button> 
    </div>
  )
}

export default CategoryButton
