/* eslint-disable jsx-a11y/alt-text */
import Link from 'next/link'
import Image from 'next/image'

export default function SocialLink({ socialLink, socialIcon }) {
  return (
    <li>
      <Link href={socialLink}>
        <Image src={socialIcon} width='20' height='20' />
      </Link>
    </li>
  )
}
