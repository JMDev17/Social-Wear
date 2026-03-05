'use client';

import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import Products from '@/components/Products/Products';
import Testimonials from '@/components/Testimonials/Testimonials';
import Newsletter from '@/components/Newsletter/Newsletter';
import Footer from '@/components/Footer/Footer';
import CartSidebar from '@/components/CartSidebar/CartSidebar';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Products />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
      <CartSidebar />
    </>
  );
}
