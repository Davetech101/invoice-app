import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import SubHeader from '@/components/SubHeader'
import Invoices from '@/components/Invoices'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
        <Header/>
        <SubHeader/>
        <Invoices/>
    </main>
  )
}
