'use client'

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import ContactForm from '@/components/ContactForm'
import { useSmoothScroll } from '@/hooks/useSmootScroll'
import GradientDivider from '@/components/GradientDivider'

export default function Home() {
  useSmoothScroll()

  return (
    <main>
      <Header />
      <Hero />
      <GradientDivider />
      <Features />
      <GradientDivider />
      <ContactForm />
    </main>
  )
}