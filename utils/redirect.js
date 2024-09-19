'use client'

import { useRouter } from 'next/navigation'
 
export default function navigate(url) {
  const router = useRouter()
  router.push(url)
}



