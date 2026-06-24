import React from 'react'

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return <>
<section className='container'>
   <p className='h-50 w-100 text-secondary text-center'>© 2025 - {currentYear} Roushan Goswami</p>
</section>

  </>


}
